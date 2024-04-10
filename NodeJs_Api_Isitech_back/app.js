import express from "express";
import routes from "./routes/route.books.js";

export default function CreateApp() {
  const app = express();

  app.use(express.json());

  app.use(routes);

  return app;
}
