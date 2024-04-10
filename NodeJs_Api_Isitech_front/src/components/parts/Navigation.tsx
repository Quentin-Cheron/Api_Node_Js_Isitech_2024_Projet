import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Navigation() {
  return (
    <header className="shadow mr-10 p-5 rounded-md">
      <nav>
        <ul className="grid gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Books</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-3">
                    <li>
                      <Link to="/books" className="hover:underline">
                        All Books
                      </Link>
                    </li>
                    <li>
                      <Link to="/add/book" className="hover:underline">
                        Add a new Books
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-3">
                    <li>
                      <Link to="/categories" className="hover:underline">
                        All Categories
                      </Link>
                    </li>
                    <li>
                      <Link to="/add/categories" className="hover:underline">
                        Add a new Categories
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Auth</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-3">
                    <li>
                      <Link to="/signup" className="hover:underline">
                        Sign up
                      </Link>
                    </li>
                    <li>
                      <Link to="/signin" className="hover:underline">
                        Sign in
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </nav>
    </header>
  );
}
