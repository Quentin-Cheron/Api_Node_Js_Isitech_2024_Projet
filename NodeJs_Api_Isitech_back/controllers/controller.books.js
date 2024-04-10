import db from "../models/index.js";
const Books = db.Books;
const Categories = db.Categories;

const getBooks = async (req, res) => {
  const books = await Books.find({});

  // replace categorie id by empty array

  res.json(books);
};

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

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    await Books.findByIdAndDelete(id);

    res.json({ message: "Book deleted" });
  } catch (error) {
    console.log(error);
  }
};

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

export default { getBooks, createBook, deleteBook, updateBook };
