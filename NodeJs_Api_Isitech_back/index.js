import CreateApp from "./app.js";
import dotenv from "dotenv";

const app = CreateApp();

dotenv.config();

// Database connection
import "./config/mongodb.js";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
