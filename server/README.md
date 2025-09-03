# Laravel Books CRUD API

This is a minimal **Laravel API-only project** that implements a simple **Books CRUD**.  
It can be used as a starting point for building RESTful APIs with Laravel.

---

## 🚀 Features
- Laravel 12.x
- API-only (no Blade, no Vite)
- CRUD operations for `Book` resource
- Seeder & Factory for generating fake data
- Ready-to-use project structure

---

## 📂 Project Structure
- **Routes** → `routes/api.php`
- **Controllers** → `app/Http/Controllers/BookController.php`
- **Model** → `app/Models/Book.php`
- **Migration** → `database/migrations/{timestamp}_create_books_table.php`
- **Factory** → `database/factories/BookFactory.php`
- **Seeder** → `database/seeders/BookSeeder.php`

---

## ⚙️ Installation

Clone the repo:

```bash
git clone https://github.com/<your-username>/laravel-api-books-crud.git
cd laravel-api-books-crud
```

Install dependencies:

```bash
composer install
```

Copy environment file:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Set up your database in `.env`, then run migrations and seeders:

```bash
php artisan migrate --seed
```

Run the server:

```bash
php artisan serve
```

The API will be available at:  
👉 `http://127.0.0.1:8000/api`

---

## 📚 API Endpoints

### List all books
**Request**
```http
GET /api/books
```

**Response Example**
```json
[
  {
    "id": 1,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "year": 2008,
    "created_at": "2025-09-04T10:15:32.000000Z",
    "updated_at": "2025-09-04T10:15:32.000000Z"
  }
]
```

---

### Get one book
**Request**
```http
GET /api/books/1
```

**Response Example**
```json
{
  "id": 1,
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "year": 2008,
  "created_at": "2025-09-04T10:15:32.000000Z",
  "updated_at": "2025-09-04T10:15:32.000000Z"
}
```

---

### Create a new book
**Request**
```http
POST /api/books
Content-Type: application/json

{
  "title": "Refactoring",
  "author": "Martin Fowler",
  "year": 2018
}
```

**Response Example**
```json
{
  "id": 2,
  "title": "Refactoring",
  "author": "Martin Fowler",
  "year": 2018,
  "created_at": "2025-09-04T10:20:10.000000Z",
  "updated_at": "2025-09-04T10:20:10.000000Z"
}
```

---

### Update a book
**Request**
```http
PUT /api/books/2
Content-Type: application/json

{
  "title": "Refactoring (2nd Edition)",
  "author": "Martin Fowler",
  "year": 2019
}
```

**Response Example**
```json
{
  "id": 2,
  "title": "Refactoring (2nd Edition)",
  "author": "Martin Fowler",
  "year": 2019,
  "created_at": "2025-09-04T10:20:10.000000Z",
  "updated_at": "2025-09-04T10:25:45.000000Z"
}
```

---

### Delete a book
**Request**
```http
DELETE /api/books/2
```

**Response**
- Returns status **204 No Content** (empty body)

---

## 🧪 Testing with Postman

You can test the API using **Postman** or **cURL**.  

Example with `cURL`:

```bash
# Get all books
curl -X GET http://127.0.0.1:8000/api/books

# Create a book
curl -X POST http://127.0.0.1:8000/api/books    -H "Content-Type: application/json"    -d '{"title":"Domain-Driven Design","author":"Eric Evans","year":2003}'
```

---

## 📄 License
This project is open-sourced under the [MIT license](LICENSE).
