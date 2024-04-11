import DelayedFallback from "@/components/DelayedFallback";

import AddBook from "./AddBook";

import BooksService from "@/services/books.service.js";
import CategoriesService from "@/services/categories.service.js";

function AddBookView() {
  return (
    <DelayedFallback
      delay={2000}
      fallback={<AddBook />}
      fetch={[BooksService.getAllBooks(), CategoriesService.getAllCategories()]}
    />
  );
}

export default AddBookView;
