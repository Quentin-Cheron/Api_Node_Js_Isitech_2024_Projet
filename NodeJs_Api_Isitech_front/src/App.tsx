import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBookView from "./pages/AddBookView";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import BookView from "./pages/BookView";
import UpdateBookView from "./pages/UpdateBookView";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<BookView />}></Route>
        <Route path="/add/book" element={<AddBookView />}></Route>
        <Route path="/update/book/:id" element={<UpdateBookView />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
