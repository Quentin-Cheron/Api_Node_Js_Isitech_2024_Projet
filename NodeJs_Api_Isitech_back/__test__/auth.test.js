import mongoose from "mongoose";
import dotenv from "dotenv";
import request from "supertest";
dotenv.config();
const MONGO_STRING = process.env.MONGO_URI;
import CreateApp from "../app.js";
import user from "../models/model.user.js";

describe("creation d'un utilisateur et login", () => {
  let app;

  beforeAll(() => {
    mongoose
      .connect(MONGO_STRING)
      .then(() => console.log("Connected to the database for Testing!"))
      .catch((err) => console.log(err));
    app = CreateApp();
  });

  // Get all books

  it("Should get all books", async () => {
    const response = await request(app).get("/books/661518b43ce31cbd53b5c34f");
    expect(response.statusCode).toBe(200);
  });

  it("Should create a new user", async () => {
    const response = await request(app).post("/auth/signup").send({
      email: "test@gmail.com",
      password: "Admin12!",
      name: "Quentin",
      phoneNumber: "123456789",
    });
    expect(response.statusCode).toBe(201);
  });

  it("Should login a user", async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "Quentin.cheron26200@gmail.com",
      password: "Administrateur12!",
    });
    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    // delete the user created
    await user.deleteOne({ email: "test@gmail.com" });
    await mongoose.connection.close();
  });
});
