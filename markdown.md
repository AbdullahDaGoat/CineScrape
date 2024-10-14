**Part 1: Average Rate of Change (AROC)**

**1. Calculating the Average Rate of Change**

The **Average Rate of Change (AROC)** of a function between two points \( x = a \) and \( x = b \) measures how the function's output changes on average over that interval. It is calculated using the formula:

\[
\text{AROC} = \frac{f(b) - f(a)}{b - a}
\]

This formula represents the slope of the **secant line** connecting the points \( (a, f(a)) \) and \( (b, f(b)) \) on the graph of the function.

**Example:**

Consider the function \( f(x) = x^2 \). Let's calculate the AROC between \( x = 2 \) and \( x = 5 \):

1. Evaluate \( f \) at the endpoints:
   - \( f(5) = 5^2 = 25 \)
   - \( f(2) = 2^2 = 4 \)

2. Apply the AROC formula:
   \[
   \text{AROC} = \frac{f(5) - f(2)}{5 - 2} = \frac{25 - 4}{3} = \frac{21}{3} = 7
   \]

**Interpretation:** The function \( f(x) = x^2 \) increases by an average of 7 units in \( f(x) \) for each unit increase in \( x \) between \( x = 2 \) and \( x = 5 \).

---

**2. Calculating AROC for the Roller Coaster Function**

Given the function from the "Roller Coaster" assignment:

\[
y = -2.5\sqrt{x - 15} + 6 \quad \text{for} \quad 15 \leq x \leq 19
\]

We will calculate the AROC between \( x = 15 \) (starting point) and \( x = 19 \) (ending point).

1. Evaluate \( y \) at \( x = 15 \) and \( x = 19 \):
   - \( f(15) = -2.5\sqrt{15 - 15} + 6 = -2.5 \times 0 + 6 = 6 \)
   - \( f(19) = -2.5\sqrt{19 - 15} + 6 = -2.5 \times 2 + 6 = -5 + 6 = 1 \)

2. Apply the AROC formula:
   \[
   \text{AROC} = \frac{f(19) - f(15)}{19 - 15} = \frac{1 - 6}{4} = \frac{-5}{4} = -1.25
   \]

---

**3. Interpreting the Sign of AROC**

The AROC calculated is **negative (-1.25)**. This indicates that, on average, the function decreases by 1.25 units in \( y \) for each unit increase in \( x \) over the interval \( [15, 19] \).

**Does this make sense?**

Yes, it does. The function \( y = -2.5\sqrt{x - 15} + 6 \) represents a decreasing curve within the interval \( x = 15 \) to \( x = 19 \). The negative AROC aligns with the downward trend of the graph, consistent with the behavior of a roller coaster descending from a peak.

---

**Part 2: Estimating Instantaneous Rate of Change (IROC)**

**1. Difference Between AROC and IROC**

- **AROC** measures the average change over an interval \( [a, b] \) and is represented by the slope of the secant line between two points.
- **IROC** measures the exact rate of change at a single point \( x = a \) and is represented by the slope of the tangent line at that point.

**Visual Representation:**

![AROC vs. IROC](https://i.imgur.com/AROCvsIROC.png)

**Example:**

For \( f(x) = x^2 \):

- **AROC** between \( x = 2 \) and \( x = 4 \):
  \[
  \text{AROC} = \frac{f(4) - f(2)}{4 - 2} = \frac{16 - 4}{2} = 6
  \]
- **IROC** at \( x = 2 \) (derivative):
  \[
  f'(x) = 2x \implies f'(2) = 4
  \]

---

**2. Estimating IROC Using the "Squeeze" Method**

The **"Squeeze" method** estimates IROC by calculating AROC over intervals that get increasingly closer to the point of interest from both sides.

**Example:**

Estimate the IROC of \( f(x) = x^2 \) at \( x = 3 \):

1. Choose small \( h \) values approaching 0:
   - From the left: \( h = -0.1, -0.01 \)
   - From the right: \( h = 0.1, 0.01 \)

2. Calculate AROC for each \( h \):
   - \( \text{AROC}_{\text{left}} = \frac{f(3) - f(3 + h)}{ -h} \)
   - \( \text{AROC}_{\text{right}} = \frac{f(3 + h) - f(3)}{h} \)

3. As \( h \) approaches 0, AROC approaches IROC:
   - \( \lim_{h \to 0} \text{AROC} = f'(3) = 6 \)

---

**3. Estimating IROC for the Roller Coaster Function at \( x = 16 \)**

Using \( y = -2.5\sqrt{x - 15} + 6 \):

1. Choose \( h = 0.1 \).

2. Calculate AROC from the left (\( h = -0.1 \)):
   - \( f(16) = 3.5 \)
   - \( f(15.9) \approx 3.6282 \)
   - \( \text{AROC}_{\text{left}} = \frac{3.5 - 3.6282}{0.1} = -1.282 \)

3. Calculate AROC from the right (\( h = 0.1 \)):
   - \( f(16.1) \approx 3.378 \)
   - \( \text{AROC}_{\text{right}} = \frac{3.378 - 3.5}{0.1} = -1.22 \)

4. Estimate IROC at \( x = 16 \):
   - Average of left and right AROCs: \( \approx -1.25 \)

---

**4. Interpretation of the Estimated IROC**

At \( x = 16 \), the function is decreasing at a rate of **approximately 1.25 units** in \( y \) for each unit increase in \( x \). This reflects the instantaneous downward slope of the roller coaster at that point.

---

**Part 3: Calculating IROC Using the Difference Quotient**

**1. Using the Difference Quotient**

The **Difference Quotient** calculates IROC by taking the limit as \( h \to 0 \):

\[
\text{IROC} = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
\]

**Example:**

For \( f(x) = x^2 \) at \( x = 3 \):

1. Calculate \( f(3 + h) - f(3) \):
   \[
   f(3 + h) - f(3) = (3 + h)^2 - 9 = 9 + 6h + h^2 - 9 = 6h + h^2
   \]

2. Divide by \( h \) and take the limit:
   \[
   \text{IROC} = \lim_{h \to 0} \frac{6h + h^2}{h} = \lim_{h \to 0} (6 + h) = 6
   \]

**Accuracy:**

This method is more accurate because it computes the exact value of the derivative, eliminating approximation errors inherent in other estimation methods.

---

**2. Calculating IROC for the Roller Coaster Function at \( x = 16 \)**

Using \( y = -2.5\sqrt{x - 15} + 6 \):

1. Express \( f(16 + h) - f(16) \):
   \[
   f(16 + h) - f(16) = -2.5\sqrt{1 + h} + 6 - ( -2.5 + 6 ) = -2.5\left( \sqrt{1 + h} - 1 \right)
   \]

2. Rewrite the difference quotient:
   \[
   \text{IROC} = \lim_{h \to 0} \frac{-2.5\left( \sqrt{1 + h} - 1 \right)}{h}
   \]

3. Rationalize the numerator:
   \[
   \text{IROC} = \lim_{h \to 0} \frac{-2.5h}{h\left( \sqrt{1 + h} + 1 \right)} = \lim_{h \to 0} \frac{-2.5}{\sqrt{1 + h} + 1}
   \]

4. Evaluate the limit:
   \[
   \text{IROC} = \frac{-2.5}{1 + 1} = -1.25
   \]

---

**3. Interpretation of the Calculated IROC**

The IROC at \( x = 16 \) is **exactly -1.25**. This indicates a precise instantaneous decrease of 1.25 units in \( y \) for each unit increase in \( x \) at that point on the roller coaster.

---

**Part 4: Analysis of Graphs with IROC**

**1. Demonstrating Zero Slope at a Turning Point**

Consider the function \( y = -x^2 + 4x + 1 \) (a parabola opening downward) with a turning point at \( x = 2 \).

1. Calculate the derivative:
   \[
   y' = \frac{dy}{dx} = -2x + 4
   \]

2. Evaluate at \( x = 2 \):
   \[
   y'(2) = -2(2) + 4 = -4 + 4 = 0
   \]

**Conclusion:** The slope of the tangent line at the turning point \( x = 2 \) is **zero**, confirming it's a local maximum.

---

**2. Behavior of Slopes Near the Turning Point**

- **Left of \( x = 2 \):** Slopes are **positive**, indicating the function is increasing.
- **Right of \( x = 2 \):** Slopes are **negative**, indicating the function is decreasing.

This change in slope direction confirms the presence of a maximum at \( x = 2 \).

---

**3. Absolute Maximum or Minimum**

- **Within the domain \( [0, 4] \):** The point at \( x = 2 \) is the **absolute maximum** since it has the highest \( y \)-value.
- **Entire Roller Coaster:** Whether it's the absolute maximum depends on the other pieces. If no other segment reaches a higher \( y \)-value, then \( x = 2 \) is the absolute maximum of the entire roller coaster.

---

**Part 5: Word Problem**

**1. Diver's Dive Analysis**

Given:
\[
h(t) = 5 + 3t - 4.9t^2
\]

**a) Time When Diver Enters the Water**

Set \( h(t) = 0 \) and solve for \( t \):

1. Rearrange the equation:
   \[
   -4.9t^2 + 3t + 5 = 0
   \]
   Multiply both sides by -1:
   \[
   4.9t^2 - 3t - 5 = 0
   \]

2. Apply the quadratic formula:
   \[
   t = \frac{3 \pm \sqrt{(-3)^2 - 4(4.9)(-5)}}{2 \times 4.9}
   \]
   \[
   t = \frac{3 \pm \sqrt{9 + 98}}{9.8} = \frac{3 \pm \sqrt{107}}{9.8}
   \]

3. Calculate \( t \):
   \[
   t = \frac{3 + 10.3441}{9.8} \approx 1.3616 \text{ s}
   \]

**Answer:** The diver will enter the water after approximately **1.36 seconds**.

---

**b) Diver's Rate of Change Upon Entering the Water**

1. Find \( h'(t) \):
   \[
   h'(t) = \frac{dh}{dt} = 3 - 9.8t
   \]

2. Evaluate at \( t = 1.36 \):
   \[
   h'(1.36) = 3 - 9.8 \times 1.36 = 3 - 13.328 = -10.328 \text{ m/s}
   \]

**Interpretation:** The diver is descending at a rate of **approximately -10.33 m/s** upon entering the water.

---

**Final Notes:**

- Negative rates indicate a decrease in height (downward motion).
- Calculations are approximate due to rounding; using exact values yields more precise results.
- Understanding the difference between average and instantaneous rates of change is crucial in analyzing motion and changes in functions.

