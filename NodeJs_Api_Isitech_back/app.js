import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";

import errorMessage from "./middlewares/error.js";

export default function CreateApp() {
  const app = express();

  app.use(express.json());

  const corsOptions = {
    origin: process.env.CLIENT_URL,
  };
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(errorMessage.handleUncaughtErrors);

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  app.post("/photos/upload", upload.array("photos", 12), (req, res, next) => {
    const fileNames = req.files.map((file) => file.filename);
    res.send(fileNames);
  });

  app.use(routes);

  return app;
}
