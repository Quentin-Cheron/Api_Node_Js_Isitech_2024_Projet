import DelayedFallback from "@/components/DelayedFallback";

import UpdateBook from "./UpdateBook";

// Services

import BooksService from "@/services/books.service.js";

function UpdateBookView() {
  return (
    <DelayedFallback
      delay={2000}
      fallback={<UpdateBook />}
      fetch={[BooksService.getAllBooks()]}
    />
  );
}

export default UpdateBookView;
