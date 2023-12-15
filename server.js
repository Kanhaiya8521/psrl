import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./src/config/database.js";
import userRouter from "./src/features/user/user_router.js";

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello how are you?");
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

(async () => {
  try {
    // Start the server after syncing
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    await db.sequelize.sync({ force: false });
    console.log("Database and tables synced");
  } catch (error) {
    console.error("Error syncing the database:", error);
  }
})();
