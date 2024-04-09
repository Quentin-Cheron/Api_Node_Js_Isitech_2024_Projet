import jwt from "jsonwebtoken";

export default async function (req, res, next) {
  try {
    const header = req.header("Authorization");

    const array = header.split(" ");

    if (array.length !== 2) {
      return res.status(401).json({ message: "Access denied" });
    }

    const token = array[1];

    if (!token) {
      return res.status(401).json({ message: "Access denied" });
    }

    let decodedData;

    decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedData;

    next();
  } catch (error) {
    console.log(error);
  }
}
