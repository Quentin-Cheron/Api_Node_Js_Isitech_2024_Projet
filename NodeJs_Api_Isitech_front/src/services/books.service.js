const API_URL_GET_ALL_BOOKS = "http://localhost:3000/books";

// Fetch function to get all books
const getAllBooks = async () => {
  try {
    const response = await fetch(API_URL_GET_ALL_BOOKS, {
      method: "GET",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books", error);
  }
};

export default {
  getAllBooks,
};
