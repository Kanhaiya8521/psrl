import ProfileModel from "./profile_model.js";

export default class ProfileController {
 
  
  addProfile = async (req, res) => {
    try {
      const { firstName, lastName, user_id } = req.body;
      console.log(firstName);
      const createUser = await ProfileModel.create({ firstName, lastName, user_id });
      res.status(200).send(createUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
