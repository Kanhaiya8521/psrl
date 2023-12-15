import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./src/config/database.js";
import userRouter from "./src/features/user/user_router.js";

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.send("hello how are you?")
})

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
