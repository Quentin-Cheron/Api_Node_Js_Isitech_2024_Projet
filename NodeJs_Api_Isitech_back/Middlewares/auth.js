import jwt from "jsonwebtoken";

export default async function (req, res, next) {
  try {
    const header = req.header("Authorization");

    const array = header?.split(" ");

    const errorAuth = {
      message: "Authentication failed, redirect to signin",
      redirectUrl: "http://localhost:5173/signin",
    };

    if (array?.length !== 2) {
      if (array?.length !== 2 || !token || !decodedData) {
        return res.status(401).json(errorAuth);
      }
    }

    const token = array[1];

    if (!token) {
      if (array?.length !== 2 || !token || !decodedData) {
        return res.status(401).json(errorAuth);
      }
    }

    let decodedData;

    try {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedData;
    } catch (error) {
      if (array?.length !== 2 || !token || !decodedData) {
        return res.status(401).json(errorAuth);
      }
    }

    next();
  } catch (error) {
    console.log(error);
  }
}
