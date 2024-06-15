const API_KEY = '5b9790d9305dca8713b9a0afad42ea8d';
const BASE_URL = 'https://api.themoviedb.org/3';
let currentMediaType = localStorage.getItem('currentMediaType') || 'movie';
let currentFilter = localStorage.getItem('currentFilter') || 'popular';
let isLoading = false;

$(document).ready(function () {
    // Load theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark');
    }

    // Set initial active filter button and media type
    $(`#filter-${currentMediaType}`).addClass('active');
    $(`#${currentFilter}-filter`).addClass('active');
    updateMediaTypeButton();

    // Theme Toggle
    $('#theme-toggle').click(function () {
        $('body').toggleClass('dark');
        localStorage.setItem('theme', $('body').hasClass('dark') ? 'dark' : 'light');
        $('.social-icon').toggleClass('bg-gray-800 hover:bg-gray-700 text-white hover:text-gray-300');
        $('.filter-btn').toggleClass('bg-gray-600 hover:bg-gray-500 text-white hover:text-gray-300');
        $('.text-gray-700').toggleClass('dark:text-gray-200');
        $('.text-gray-600').toggleClass('dark:text-gray-400');
        $(this).find('i').toggleClass('fa-moon fa-sun');
    });

    // Clear Search
    $('#clear-search').click(function () {
        $('#search-input').val('');
        clearSearchResults();
        loadMedia(currentMediaType, currentFilter);
    });

    // Filter Toggle for Media Type
    $('#filter-movies').click(function () {
        currentMediaType = 'movie';
        localStorage.setItem('currentMediaType', currentMediaType);
        clearSearchResults();
        loadMedia(currentMediaType, currentFilter);
        updateMediaTypeButton();
    });

    $('#filter-tvshows').click(function () {
        currentMediaType = 'tv';
        localStorage.setItem('currentMediaType', currentMediaType);
        clearSearchResults();
        loadMedia(currentMediaType, currentFilter);
        updateMediaTypeButton();
    });

    // Filter Buttons
    $('#upcoming-filter').click(function () {
        setActiveFilter('upcoming');
    });

    $('#popular-filter').click(function () {
        setActiveFilter('popular');
    });

    $('#trending-filter').click(function () {
        setActiveFilter('trending');
    });

    // Load initial media
    loadMedia(currentMediaType, currentFilter);

    // Search functionality
    const searchInput = $('#search-input');
    searchInput.on('input', debounce(function () {
    const query = searchInput.val().trim(); // Use searchInput instead of $(this)
        if (query.length > 0) {
            if (isTmdbOrImdbId(query)) {
                fetchMediaById(query);
            } else {
            searchMedia(query, currentMediaType);
            }
        } else {
            clearSearchResults();
            loadMedia(currentMediaType, currentFilter);
        }
    }, 300));


    // Personalize Filter Modal
    $('#personalize-filter').click(function () {
        $('#personalize-modal').removeClass('hidden');
    });

    $('#close-personalize-modal').click(function () {
        $('#personalize-modal').addClass('hidden');
    });

    $('#apply-personalize-filters').click(function () {
        const favoriteGenres = $('#favorite-genres').val();
        const languagePreference = $('#language-preference').val();
        localStorage.setItem('favoriteGenres', favoriteGenres);
        localStorage.setItem('languagePreference', languagePreference);
        $('#personalize-modal').addClass('hidden');
        clearSearchResults();
        loadMedia(currentMediaType, currentFilter);
    });

    // Advanced Filter Modal
    $('#advanced-filter').click(function () {
        $('#advanced-modal').removeClass('hidden');
    });

    $('#close-advanced-modal').click(function () {
        $('#advanced-modal').addClass('hidden');
    });

    $('#apply-advanced-filters').click(function () {
        const releaseYear = $('#release-year').val();
        const ratingRange = $('#rating-range').val();
        const runtimeRange = $('#runtime-range').val();
        const sortType = $('#sort-type').val();
        localStorage.setItem('releaseYear', releaseYear);
        localStorage.setItem('ratingRange', ratingRange);
        localStorage.setItem('runtimeRange', runtimeRange);
        localStorage.setItem('sortType', sortType);
        $('#advanced-modal').addClass('hidden');
        clearSearchResults();
        loadMedia(currentMediaType, currentFilter, releaseYear, ratingRange, runtimeRange, sortType);
    });

    // Clear Filters
    $('#clear-filters').click(function () {
        $('.filter-btn').removeClass('active');
        clearSearchResults();
        loadMedia('movie', 'popular');
        currentMediaType = 'movie';
        currentFilter = 'popular';
        localStorage.removeItem('currentMediaType');
        localStorage.removeItem('currentFilter');
        localStorage.removeItem('releaseYear');
        localStorage.removeItem('ratingRange');
        localStorage.removeItem('runtimeRange');
        localStorage.removeItem('sortType');
        updateMediaTypeButton();
    });

    // Functions
    function loadMedia(mediaType, filter, releaseYear = '', ratingRange = '', runtimeRange = '', sortType = 'popularity.desc') {
        if (isLoading) return;
        isLoading = true;
        let url = `${BASE_URL}/${mediaType}/${filter}?api_key=${API_KEY}`;
        if (filter === 'trending') {
            url = `${BASE_URL}/trending/${mediaType}/week?api_key=${API_KEY}`;
        } else if (filter === 'upcoming' && mediaType === 'movie') {
            url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
        } else if (filter === 'upcoming' && mediaType === 'tv') {
            url = `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`;
        }
        if (releaseYear) {
            url += `&primary_release_year=${releaseYear}`;
        }
        if (ratingRange) {
            url += `&vote_average.gte=${ratingRange.split(',')[0]}&vote_average.lte=${ratingRange.split(',')[1]}`;
        }
        if (runtimeRange) {
            url += `&with_runtime.gte=${runtimeRange.split(',')[0]}&with_runtime.lte=${runtimeRange.split(',')[1]}`;
        }
        if (sortType) {
            url += `&sort_by=${sortType}`;
        }
        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                displayResults(data.results, mediaType);
                isLoading = false;
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
                isLoading = false;
            }
        });
    }

    function isTmdbOrImdbId(query) {
        return /^tt\d+$/.test(query) || /^\d+$/.test(query);
    }

    function searchMedia(query, mediaType) {
        if (isLoading) return;
        isLoading = true;
        const url = `${BASE_URL}/search/${mediaType}?api_key=${API_KEY}&query=${query}`;
        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                if (data.results.length > 0) {
                    displayResults(data.results, mediaType);
                } else {
                    // Display a message when no search results are found
                    clearSearchResults();
                    $('#search-results').append('<div class="text-center text-gray-600 dark:text-gray-400 py-4">No results found.</div>');
                }
                isLoading = false;
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
                isLoading = false;
            }
        });
    }

    function fetchMediaById(id) {
        if (isLoading) return;
        isLoading = true;

        // Check if it's an IMDb ID
        if (/^tt\d+$/.test(id)) {
            // Fetch TMDB ID using IMDb ID
            $.ajax({
                url: `${BASE_URL}/find/${id}?api_key=${API_KEY}&external_source=imdb_id`,
                method: 'GET',
                success: function (data) {
                    if (data.movie_results.length > 0) {
                        displayResults(data.movie_results, 'movie');
                    } else if (data.tv_results.length > 0) {
                        displayResults(data.tv_results, 'tv');
                    } else {
                        clearSearchResults();
                    }
                    isLoading = false;
                },
                error: function (xhr, status, error) {
                    console.error('Error:', error);
                    isLoading = false;
                }
            });
        } else {
            // Fetch by TMDB ID
            $.ajax({
                url: `${BASE_URL}/${currentMediaType}/${id}?api_key=${API_KEY}`,
                method: 'GET',
                success: function (data) {
                    displayResults([data], currentMediaType);
                    isLoading = false;
                },
                error: function (xhr, status, error) {
                    console.error('Error:', error);
                    isLoading = false;
                }
            });
        }
    }

    function clearSearchResults() {
        $('#search-results').empty();
    }

    function displayResults(results, mediaType) {
        clearSearchResults();
        results.forEach(result => {
            const isMovie = mediaType === 'movie' || result.media_type === 'movie';
            const title = isMovie ? result.title : result.name;
            const releaseDate = isMovie ? result.release_date : result.first_air_date;
            const posterPath = result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : 'https://critics.io/img/movies/poster-placeholder.png';
                        // Placeholder image if poster_path is not available
                        const mediaTypeText = isMovie ? 'Movie' : 'TV Show';

                        const card = $('<div>').addClass('bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden');
                        $('<img>').attr('src', posterPath).attr('alt', title).addClass('w-full h-72 object-cover').appendTo(card);
                        const cardBody = $('<div>').addClass('p-4').appendTo(card);
                        $('<h3>').addClass('text-lg font-semibold').text(title).appendTo(cardBody);
                        $('<p>').addClass('text-sm text-gray-600 dark:text-gray-400').text(`${mediaTypeText} | ${releaseDate}`).appendTo(cardBody);
                        $('<p>').addClass('text-gray-700 dark:text-gray-200 mt-2').text(truncate(result.overview, 120)).appendTo(cardBody);
                        $('#search-results').append(card);
                    });
                }
            
                function debounce(func, delay) {
                    let timeoutId;
                    return (...args) => {
                        clearTimeout(timeoutId);
                        timeoutId = setTimeout(() => {
                            func.apply(this, args);
                        }, delay);
                    };
                }
            
                function truncate(str, maxLength) {
                    return str.length > maxLength ? str.slice(0, maxLength - 3) + '...' : str;
                }
            
                function setActiveFilter(filter) {
                    currentFilter = filter;
                    localStorage.setItem('currentFilter', currentFilter);
                    $('.filter-btn').removeClass('active');
                    $(`#${filter}-filter`).addClass('active');
                    clearSearchResults();
                    loadMedia(currentMediaType, currentFilter);
                }
            
                function updateMediaTypeButton() {
                    if (currentMediaType === 'movie') {
                        $('#filter-movies').addClass('active');
                        $('#filter-tvshows').removeClass('active');
                    } else {
                        $('#filter-tvshows').addClass('active');
                        $('#filter-movies').removeClass('active');
                    }
                }
            
                // Personalize Filter Modal
                $('#personalize-filter').click(function () {
                    $('#personalize-modal').removeClass('hidden');
                });
            
                $('#close-personalize-modal').click(function () {
                    $('#personalize-modal').addClass('hidden');
                });
            
                $('#apply-personalize-filters').click(function () {
                    const favoriteGenres = $('#favorite-genres').val();
                    const languagePreference = $('#language-preference').val();
                    localStorage.setItem('favoriteGenres', favoriteGenres);
                    localStorage.setItem('languagePreference', languagePreference);
                    $('#personalize-modal').addClass('hidden');
                    clearSearchResults();
                    loadMedia(currentMediaType, currentFilter);
                });
            
                // Advanced Filter Modal
                $('#advanced-filter').click(function () {
                    $('#advanced-modal').removeClass('hidden');
                });
            
                $('#close-advanced-modal').click(function () {
                    $('#advanced-modal').addClass('hidden');
                });
            
                $('#apply-advanced-filters').click(function () {
                    const releaseYear = $('#release-year').val();
                    const ratingRange = $('#rating-range').val();
                    const runtimeRange = $('#runtime-range').val();
                    const sortType = $('#sort-type').val();
                    localStorage.setItem('releaseYear', releaseYear);
                    localStorage.setItem('ratingRange', ratingRange);
                    localStorage.setItem('runtimeRange', runtimeRange);
                    localStorage.setItem('sortType', sortType);
                    $('#advanced-modal').addClass('hidden');
                    clearSearchResults();
                    loadMedia(currentMediaType, currentFilter, releaseYear, ratingRange, runtimeRange, sortType);
                });
            
                // Clear Filters
                $('#clear-filters').click(function () {
                    $('.filter-btn').removeClass('active');
                    clearSearchResults();
                    loadMedia('movie', 'popular');
                    currentMediaType = 'movie';
                    currentFilter = 'popular';
                    localStorage.removeItem('currentMediaType');
                    localStorage.removeItem('currentFilter');
                    localStorage.removeItem('releaseYear');
                    localStorage.removeItem('ratingRange');
                    localStorage.removeItem('runtimeRange');
                    localStorage.removeItem('sortType');
                    updateMediaTypeButton();
                });
            
                // Function to populate personalize and advanced filter modals with stored values
                function populateModals() {
                    const favoriteGenres = localStorage.getItem('favoriteGenres');
                    const languagePreference = localStorage.getItem('languagePreference');
                    const releaseYear = localStorage.getItem('releaseYear');
                    const ratingRange = localStorage.getItem('ratingRange');
                    const runtimeRange = localStorage.getItem('runtimeRange');
                    const sortType = localStorage.getItem('sortType');
            
                    if (favoriteGenres) {
                        $('#favorite-genres').val(favoriteGenres);
                    }
            
                    if (languagePreference) {
                        $('#language-preference').val(languagePreference);
                    }
            
                    if (releaseYear) {
                        $('#release-year').val(releaseYear);
                    }
            
                    if (ratingRange) {
                        $('#rating-range').val(ratingRange);
                    }
            
                    if (runtimeRange) {
                        $('#runtime-range').val(runtimeRange);
                    }
            
                    if (sortType) {
                        $('#sort-type').val(sortType);
                    }
                }
            
                // Initialize modals with stored values
                populateModals();
            });
            