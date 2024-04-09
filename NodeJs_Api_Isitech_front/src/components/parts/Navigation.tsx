import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="shadow mr-10 p-5 rounded-md">
      <nav>
        <ul className="grid gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
