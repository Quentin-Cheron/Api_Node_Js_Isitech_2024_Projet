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

  // Token for the tests

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlF1ZW50aW4uY2hlcm9uMjYyMDBAZ21haWwuY29tIiwiaWQiOiI2NjE3YWQ5ZjdkM2VkZjczZGNlNDcwZjMiLCJpYXQiOjE3MTM0NjU5NDYsImV4cCI6MTcxMzQ2OTU0Nn0.j2310FC2JWnietfyUab2BHGCImIQ2O01P5s7BOPxfDE";

  // Create a new user

  it("Should create a new user", async () => {
    const response = await request(app).post("/auth/signup").send({
      email: "test@gmail.com",
      password: "Admin12!",
      name: "Quentin",
      phoneNumber: "123456789",
    });
    expect(response.statusCode).toBe(201);
  });

  // Login a user

  it("Should login a user", async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "Quentin.cheron26200@gmail.com",
      password: "Administrateur12!",
    });
    expect(response.statusCode).toBe(200);
  });

  // Get all books

  it("Should get all books", async () => {
    const response = await request(app)
      .get("/books")
      .set("Authorization", `Bearer ${token}`); // Use the token

    expect(response.statusCode).toBe(200);
  });

  // Delete a book

  it("Should Remove a book", async () => {
    const response = await request(app)
      .delete("/books/661518b73ce31cbd53b5c351")
      .set("Authorization", `Bearer ${token}`); // Use the token
    expect(response.statusCode).toBe(200);
  });

  // Upload a file

  it("Should Upload a file", async () => {
    const response = await request(app)
      .post("/files/upload")
      .attach("file", "chemin/vers/une/image.png");
    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    // delete the user created
    await user.deleteOne({ email: "test@gmail.com" });
    await mongoose.connection.close();
  });
});
