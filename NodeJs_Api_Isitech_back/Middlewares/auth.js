import jwt from "jsonwebtoken";

export default async function (req, res, next) {
  try {
    const header = req.header("Authorization");

    const array = header?.split(" ");

    if (array?.length !== 2) {
      return res.redirect("http://localhost:5173/signin", 302);
    }

    const token = array[1];

    if (!token) {
      return res.redirect("http://localhost:5173/signin", 302);
    }

    let decodedData;

    try {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedData;
    } catch (error) {
      return res.redirect("http://localhost:5173/signin", 302);
    }

    next();
  } catch (error) {
    console.log(error);
  }
}
