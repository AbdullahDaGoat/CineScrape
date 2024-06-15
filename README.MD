# TMDB Project README

This README outlines the tasks, small changes, and future plans for the TMDB Project, a web application designed to interact with The Movie Database (TMDB) API. This project aims to provide users with a comprehensive and user-friendly interface for discovering movies and TV shows, reading reviews, and accessing detailed information about their favorite media.

## Table of Contents

1. [Small Changes](#small-changes)
   - [Fetch Translations](#fetch-translations)
   - [Fetch Reviews](#fetch-reviews)
   - [Discover Button](#discover-button)
   - [Back to Top Button](#back-to-top-button)
   - [Fetch Requests for Security](#fetch-requests-for-security)
2. [Finding Data on TMDB](#finding-data-on-tmdb)
3. [Making Languages Work](#making-languages-work)
4. [User Interface Improvements](#user-interface-improvements)
   - [Search Results Overflow](#search-results-overflow)
   - [Advanced and Personalized Filters](#advanced-and-personalized-filters)
   - [Responsive Design](#responsive-design)
   - [Surprise Me Feature](#surprise-me-feature)
   - [Filter by Movie Company](#filter-by-movie-company)
   - [Card Modifications](#card-modifications)
   - [TMDB Reviews Design](#tmdb-reviews-design)
   - [SSL for API](#ssl-for-api)
5. [Future Plans](#future-plans)
   - [Discussion Area](#discussion-area)
   - [Detailed Movie Popups](#detailed-movie-popups)
   - [Recently Watched Section](#recently-watched-section)
   - [Recommended for You Section](#recommended-for-you-section)
   - [Social Media Integration](#social-media-integration)
   - [Trivia and Behind the Scenes](#trivia-and-behind-the-scenes)
   - [Watch Later Feature](#watch-later-feature)
   - [AI Personalization](#ai-personalization)
   - [Favorites and Bookmarks](#favorites-and-bookmarks)
   - [Lists and Average Ratings](#lists-and-average-ratings)
   - [Account States](#account-states)
   - [Alternative Titles](#alternative-titles)
6. [Random Useful Info](#random-useful-info)
   - [Search and Query Details](#search-and-query-details)
   - [Adding Ratings](#adding-ratings)

## Small Changes

### Fetch Translations

```javascript
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer YOUR_API_KEY'
  }
};

fetch('https://api.themoviedb.org/3/movie/movie_id/translations', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

### Fetch Reviews

```javascript
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer YOUR_API_KEY'
  }
};

fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

### Discover Button

Create a "Discover" button using the Discover Movie API endpoint. Refer to the [Discover Movie](https://developer.themoviedb.org/reference/discover-movie) documentation for details.

### Back to Top Button

Add a "Back to Top" button for easier navigation on long pages.

### Fetch Requests for Security

Use secure fetch requests to interact with the TMDB API.

```javascript
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer YOUR_API_KEY'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

## Finding Data on TMDB

There are three main ways to search for and find movies, TV shows, and people on TMDB:

1. **Search (/search)**: Provide a query string to find the closest match.
2. **Discover (/discover)**: Use filters or definable values like ratings, certifications, or release dates.
3. **Find (/find)**: Use existing external IDs (e.g., IMDB ID) to find data.

Refer to the [Search & Query for Details](https://developer.themoviedb.org/reference/search) page for more workflows.

## Making Languages Work

Learn about languages on TMDB, including the use of ISO 639-1 and ISO 3166-1 codes. Example requests:
### English Example

```javascript
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer YOUR_API_KEY'
  }
};

fetch('https://api.themoviedb.org/3/tv/1399?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

### Portuguese Example

```javascript
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer YOUR_API_KEY'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

## User Interface Improvements

### Search Results Overflow

Ensure that search results overflow but are not limited, allowing users to see more results by scrolling down.

### Advanced and Personalized Filters

Implement advanced and personalized filters to enhance user experience.

### Responsive Design

Improve the responsive design of the application for better accessibility on different devices.

### Surprise Me Feature

Add a "Surprise Me" feature with a dice roll icon to show a random "Film of the Day."

### Filter by Movie Company

Create a filter based on the movie company (e.g., Marvel, DC).

### Card Modifications

Modify the movie/TV show cards to include:
- User Reviews
- Appropriate Age Rating
- Genre
- Number of Seasons and Episodes (for TV shows)
- TMDB ID
- Relevant Tags and Information
- Brief Description with "..." if truncated

### TMDB Reviews Design

Display user reviews or overall reviews in a percentage format within a circular label between the poster image and the description.

### SSL for API

Ensure that the API uses SSL for secure communication.

## Future Plans

### Discussion Area

Add a discussion area for each movie where users can rate and leave comments.

### Detailed Movie Popups

Include detailed movie popups with:
- TMDB logo linking to additional details on TMDB
- "Watch Trailer" button
- Services cast information
- Comprehensive movie details (title, poster image, reviews, etc.)

### Recently Watched Section

Add a "Recently Watched" section for users to access their recently watched movies/shows.

### Recommended for You Section

Create a "Recommended for You" section based on user's watch history and preferences.

### Social Media Integration

Integrate with social media platforms to allow users to share their favorite movies/shows.

### Trivia and Behind the Scenes

Include a "Trivia" or "Behind the Scenes" section for each movie/show.

### Watch Later Feature

Add a "Watch Later" or "Add to Watchlist" feature for users to save movies/shows.

### AI Personalization

Implement AI personalization options based on user's watch history and preferences.

### Favorites and Bookmarks

Allow users to favorite movies and TV shows, and create bookmarks, requiring a TMDB account.

### Lists and Average Ratings

Enable users to create lists and view average ratings across movies and TV shows.

### Account States

Use the [Account States](https://developer.themoviedb.org/reference/movie-account-states) API to manage user states for movies.

### Alternative Titles

Fetch and display alternative titles for movies.

```javascript
fetch('https://api.themoviedb.org/3/movie/movie_id/alternative_titles', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

## Random Useful Info

### Search and Query Details

Learn how to search and query for a movie on TMDB. Example workflow:

1. **Search**: Issue a query to search for a movie, TV show, or person.

```bash
curl --request GET \
     --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=YOUR_API_KEY'
```

2. **Query for Details**: Use the movie ID from the search results to fetch detailed information.

```bash
curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/343611?api_key=YOUR_API_KEY'
```

### Adding Ratings

Allow users to rate movies and save them to their rated list.

```javascript
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: 'Bearer YOUR_API_KEY'
  }
};

fetch('https://api.themoviedb.org/3/movie/movie_id/rating', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```
