import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBookView from "./pages/AddBookView";
import UpdateBook from "./pages/UpdateBook";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import BookView from "./pages/BookView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<BookView />}></Route>
        <Route path="/add/book" element={<AddBookView />}></Route>
        <Route path="/update/book/:id" element={<UpdateBook />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
