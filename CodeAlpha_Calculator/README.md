# 🧮 Calculator Project

A simple and responsive web-based calculator built using **HTML**, **CSS**, and **JavaScript**.  
This calculator performs basic arithmetic operations with a clean and modern user interface.

---

## 🚀 Features

- ➕ Addition
- ➖ Subtraction
- ✖ Multiplication
- ➗ Division
- 📊 Percentage
- 🔢 Decimal support
- ⌫ Delete last character
- 🧹 Clear display
- ✅ Error handling for invalid expressions
- 🎨 Modern gradient UI design

---

## 🛠 Technologies Used

- HTML5
- CSS3 (Grid + Flexbox)
- JavaScript (Vanilla JS)

---

## 📁 Project Structure

```
calculator-project/
│
├── index.html
├── calculator.css
└── calculator.js
```

---

## 📄 File Description

### 1️⃣ index.html
- Creates the calculator layout
- Contains display screen
- Defines all buttons
- Links CSS and JavaScript files

### 2️⃣ calculator.css
- Styles the calculator UI
- Uses Grid for button layout
- Adds gradient background
- Includes hover effects
- Responsive centered layout

### 3️⃣ calculator.js
Handles calculator logic:

- `appendNumber(num)` → Adds number to display
- `appendOperator(op)` → Adds operator (prevents double operators)
- `clearDisplay()` → Clears the screen
- `deleteLast()` → Removes last character
- `calculate()` → Evaluates expression using `eval()`
- Displays `"Error"` for invalid expressions

---

## ▶️ How to Run the Project

1. Download or clone the project
2. Make sure all three files are in the same folder:
   - `index.html`
   - `calculator.css`
   - `calculator.js`
3. Open `index.html` in your browser
4. Start calculating 🎉

---

## ⚠️ Note

This project uses JavaScript's `eval()` function to evaluate expressions.  
While acceptable for small projects and learning purposes, it is **not recommended for production applications** due to security risks.

---

## 💡 Future Improvements (Optional Ideas)

- Add keyboard support
- Add scientific calculator functions
- Improve expression validation
- Add calculation history
- Make it mobile-optimized
- Replace `eval()` with a safer parser

---

## 📸 Preview

Modern dark calculator UI with:
- Green display text
- Orange operator buttons
- Red clear button
- Smooth hover effects
- Gradient background

---

## 📌 Author

Your Name Here  
Frontend Developer

---

⭐ If you like this project, feel free to improve and expand it!