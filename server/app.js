const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const db_uri = `${process.env.DB_URL}/${process.env.DB_NAME}`;

app.use("/auth", authRouter);
app.use("/api", userRouter);

mongoose
  .connect(db_uri, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connection established"))
  .catch(() => console.log("connection not established"));


const PORT = 8000;
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
