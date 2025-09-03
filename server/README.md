# Laravel API Template

A clean **Laravel API-only** template (no Blade, no Vite, no frontend).  
Just backend ready to build APIs.

---

## 🚀 Quick Setup (all-in-one)

```bash
composer install && cp .env.example .env && php artisan key:generate && php artisan migrate && php artisan serve
```

*(On Windows use `copy .env.example .env` instead of `cp`)*

---

## ⚙️ Step by Step

1. Install dependencies:
   ```bash
   composer install
   ```

2. Copy environment file:
   ```bash
   cp .env.example .env
   ```
   *(Windows: `copy .env.example .env`)*

3. Generate app key:
   ```bash
   php artisan key:generate
   ```

4. Update your `.env` database settings:
   ```
   DB_DATABASE=your_db_name
   DB_USERNAME=your_db_user
   DB_PASSWORD=your_db_pass
   ```

5. Run migrations (if needed):
   ```bash
   php artisan migrate
   ```

6. Start the server:
   ```bash
   php artisan serve
   ```

---

## 📂 Code Structure

- **Routes** → `routes/api.php`  
- **Controllers** → `app/Http/Controllers`  
- **Models** → `app/Models`  
- **Migrations** → `database/migrations`  

---

## 🔒 Authentication (Optional)

To enable Sanctum authentication:

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

Then protect your routes with the `auth:sanctum` middleware.

---
