import mongoose from "mongoose";

import Books from "./model.books.js";
import Categories from "./model.categories.js";
import User from "./model.user.js";

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.Books = Books;
db.Categories = Categories;
db.User = User;

export default db;
