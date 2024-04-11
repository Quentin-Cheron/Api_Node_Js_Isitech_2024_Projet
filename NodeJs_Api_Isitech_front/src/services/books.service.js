const API_URL_GET_ALL_BOOKS = "http://localhost:3000/books";
const API_URL_ADD_BOOK = "http://localhost:3000/books";
const API_URL_REMOVE_BOOK = "http://localhost:3000/books";
const API_URL_UPDATE_BOOK = "http://localhost:3000/books";
const API_URL_GET_BOOK_BY_ID = "http://localhost:3000/books";

// Fetch function to get all books
const getAllBooks = async () => {
  try {
    const response = await fetch(API_URL_GET_ALL_BOOKS, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching books", error);
  }
};

// Fetch function to get a book by id

const getBookById = async (bookId) => {
  try {
    const response = await fetch(`${API_URL_GET_BOOK_BY_ID}/${bookId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching book", error);
  }
};

// Fetch function to add a book

const createBook = async (book) => {
  try {
    const response = await fetch(API_URL_ADD_BOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
      body: JSON.stringify(book),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error adding book", error);
  }
};

// Fetch function to remove a book

const removeBook = async (bookId) => {
  try {
    const response = await fetch(`${API_URL_REMOVE_BOOK}/${bookId}`, {
      method: "DELETE",
      Authorization: "Bearer " + localStorage.getItem("user"),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error removing book", error);
  }
};

// Fetch function to update a book

const updateBook = async (bookId, book) => {
  console.log(bookId, book);
  try {
    const response = await fetch(`${API_URL_UPDATE_BOOK}/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
      body: JSON.stringify(book),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error updating book", error);
  }
};

export default {
  getAllBooks,
  createBook,
  removeBook,
  updateBook,
  getBookById,
};
