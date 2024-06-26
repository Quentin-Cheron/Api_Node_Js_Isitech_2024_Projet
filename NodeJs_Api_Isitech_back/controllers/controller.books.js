import db from "../models/index.js";
const Books = db.Books;
const Categories = db.Categories;

// function to get all books

const getBooks = async (req, res) => {
  const books = await Books.find({});

  // replace categorie id by empty array

  res.json(books);
};

// function to get a book by id

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Books.findById(id);

    res.json(book);
  } catch (error) {
    console.log(error);
  }
};

// function to create a book

const createBook = async (req, res) => {
  try {
    const { title, author, categories, description } = req.body;

    const newBook = new Books({
      label: title,
      author,
      categories: categories[0],
      description,
    });

    await newBook.save();

    res.json(newBook);
  } catch (error) {
    console.log(error);
  }
};

// function to delete a book

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    await Books.findByIdAndDelete(id);

    res.json({ message: "Book deleted" });
  } catch (error) {
    console.log(error);
  }
};

// function to update a book

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, categories, description } = req.body;

    await Books.findByIdAndUpdate(id, {
      label: title,
      author,
      categories: categories[0],
      description,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { getBooks, createBook, deleteBook, updateBook, getBookById };
