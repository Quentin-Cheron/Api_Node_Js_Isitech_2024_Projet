import DelayedFallback from "@/components/DelayedFallback";

import Books from "./Books";

// Services

import BooksService from "@/services/books.service.js";

function BookView() {
  return (
    <DelayedFallback
      delay={2000}
      fallback={<Books />}
      fetch={[BooksService.getAllBooks()]}
    />
  );
}

export default BookView;
