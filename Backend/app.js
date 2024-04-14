import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from "cors";
const app = express();
app.use(cors())
app.use(express.json());
app.use("/api/user",router );
app.use("/api/blog",blogRouter );
mongoose
  .connect(
    "mongodb+srv://blog:oxmmwFzBUZMURblO@cluster0.ywdoncm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(7000))
  .then(() =>
    console.log("connected to the database and listining to PORT 7000")
  )
  .catch((err) => console.log(err));

