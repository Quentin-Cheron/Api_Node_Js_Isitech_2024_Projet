import db from "../models/index.js";
const categories = db.Categories;

const getCategories = async (req, res) => {
  const allCategories = await categories.find({});
  res.json(allCategories);
};

export default { getCategories };
