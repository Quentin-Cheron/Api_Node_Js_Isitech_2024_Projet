import db from "../models/index.js";
const Books = db.Books;
const Categories = db.Categories;

const getBooks = async (req, res) => {
  const books = await Books.find({});

  console.log(books);

  // replace categorie id by empty array

  res.json(books);
};

export default { getBooks };
