import mongoose from "mongoose";

const Categories = new mongoose.model("categories", {
  label: {
    type: String,
    required: true,
  },
});

export default Categories;
