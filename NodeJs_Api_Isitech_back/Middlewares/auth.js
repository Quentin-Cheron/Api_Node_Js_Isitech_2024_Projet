import jwt from "jsonwebtoken";

export default async function (req, res, next) {
  try {
    const header = req.header("Authorization");
    const array = header?.split(" ");

    if (!array || !array[1]) {
      console.log(array);
      return res.status(401).json({
        message: "Authentication failed, JWT must be provided",
        redirectUrl: "http://localhost:5173/signin",
        success: false,
      });
    }

    const token = array[1];

    let decodedData;

    try {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedData;
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        message: "Authentication failed, invalid JWT",
        redirectUrl: "http://localhost:5173/signin",
        success: false,
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
