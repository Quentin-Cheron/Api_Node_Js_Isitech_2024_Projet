import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import swagger from "./swagger.js";

import errorMessage from "./middlewares/error.js";

export default function CreateApp() {
  // configure the express server
  const app = express();

  app.use(express.json());

  // configure cors

  const corsOptions = {
    origin: process.env.CLIENT_URL,
  };
  app.use(cors(corsOptions));

  // configure body parser

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(errorMessage.handleUncaughtErrors);

  swagger(app);

  // configure multer

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  app.post("/files/upload", upload.array("file", 12), (req, res, next) => {
    const fileNames = req.files.map((file) => file.filename);
    res.send(fileNames);
  });

  app.use(routes);

  return app;
}
