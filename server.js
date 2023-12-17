import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import db from "./src/config/database.js";
import userRouter from "./src/features/user/user_router.js";
import profileRouter from "./src/features/profile/profile_router.js"
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//home router
app.get("/", (req, res) => {
  res.status(200).send("hello how are you?");
})

//user router
app.use("/api/users", userRouter);

//profile router
app.use("/api/profile", profileRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// db.sequelize.authenticate()
// .then(() => {
//   console.log("connected DB");
// })
// .catch((err) => {
//   console.log("Error to cconnect with DB: " + err);
// })

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database");

    // Add sync({ force: true }) to recreate tables every time the server starts
    // Be cautious with force: true in a production environment as it will drop existing tables
    return db.sequelize.sync({ force: false });
  })
  .then(() => {
    console.log("Database models synchronized");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
