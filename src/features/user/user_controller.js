// import UserModel from "./user_model.js";
import UserModel from "./user_model.js";
import crypto from "crypto";

export default class UserController {
  generateUserId = async (phone) => {
    const hash = crypto.createHash("md5").update(phone).digest("hex");
    const userId = hash.slice(0, 8); // Take the first 8 characters of the hash
    return userId;
  };
  signup = async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      const instance = new UserController();
      const user_id = await instance.generateUserId(phone);
      const user = new UserModel({ user_id, name, email, phone });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  signin = async (req, res) => {
    try {
      const { phone } = req.body.phone;
      const user = await UserModel.findOne({ phone });
      if (user) {
        return res.status(200).send(user);
      }
      const createUser = await UserModel.create({ phone });
      // const user = await UserModel.findAll();
      res.status(200).send(createUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
