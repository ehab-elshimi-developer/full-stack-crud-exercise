<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    // Get all books
     public function index()
    {
        return response()->json(Book::all());
    }
    // Get single book
    public function show(Book $book)
    {
        return response()->json($book);
    }
    // Create new book
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'year' => 'nullable|integer',
        ]);

        $book = Book::create($data);

        return response()->json($book, 201);
    }
    // Update book
    public function update(Request $request, Book $book)
    {
        $data = $request->validate([
            'title' => 'sometimes|required|string',
            'author' => 'sometimes|required|string',
            'year' => 'nullable|integer',
        ]);

        $book->update($data);

        return response()->json($book);
    }
    // Delete book
    public function destroy(Book $book)
    {
        $book->delete();
        return response()->json(['message' => 'deleted successfully'], 200);    }
}
