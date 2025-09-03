const API_URL = "http://127.0.0.1:8000/api/books";

// Load books
async function loadBooks() {
  const res = await fetch(API_URL);
  const books = await res.json();

  const tbody = document.querySelector("#booksTable tbody");
  tbody.innerHTML = "";

  books.forEach(book => {
    tbody.innerHTML += `
      <tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteBook(${book.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// Add book
document.querySelector("#bookForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, author, year })
  });

  e.target.reset();
  loadBooks();
});

// Delete book
async function deleteBook(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadBooks();
}

// Initial load
loadBooks();
