// import UserModel from "./user_model.js";
import UserModel from "./user_model.js";

export default class UserController {
  addUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      console.log("*******************", req.body);
      const user = await UserModel.create({ name, email });
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  getUser = async (req, res) => {
    try {
      const user = await UserModel.findAll();
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
