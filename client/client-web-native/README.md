# 📚 Books CRUD – Native Client

A simple frontend client built with **HTML, Bootstrap 5, and Vanilla JavaScript**.
This project consumes the Laravel Books API provided in the `server/` folder.

---

## 🚀 Features

- Display all books in a table
- Add a new book
- Delete a book
- Uses Fetch API with async/await

---

## 📂 Project Structure

client-native/

```
├── index.html          # main entry
├── css/
│   ├── bootstrap.min.css
│   ├── fontawesome/
│   └── style.css       # custom styles
└── js/
    └── index.js        # fetch API calls
```

---

## ▶️ How to Run

1. Make sure the Laravel API backend is running:

   ```bash
   php artisan serve
   ```

   Default API URL: `http://127.0.0.1:8000/api/books`

2. Open `index.html` in your browser
   (or use VS Code Live Server for better experience).

---

## 📬 API Endpoints

**Get all books**

```
GET http://127.0.0.1:8000/api/books
```

**Add a book**

```
POST http://127.0.0.1:8000/api/books
Content-Type: application/json

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "year": 2008
}
```

**Delete a book**

```
DELETE http://127.0.0.1:8000/api/books/{id}
```

---

### 🏷️ Tags

laravel, api, bootstrap, javascript, crud, frontend, vanilla-js
