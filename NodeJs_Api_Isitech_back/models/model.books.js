import mongoose from "mongoose";

const Books = new mongoose.model("books", {
  label: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default Books;
