import User from "../models/UserModel";
import { createPasswordHash } from "../services/auth";
class UsersController {
  async index(req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json();
      }
      res.status(200).json(user);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (user) {
        return res.status(422).json({ msg: "Email já cadastrado" });
      }

      const encryptedPassword = await createPasswordHash(password);
      console.log(encryptedPassword);

      const newUser = await User.create({
        email: email,
        password: encryptedPassword,
      });

      return res.status(201).json(newUser);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const { email, password } = req.body;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json();
      }
      const encryptedPassword = await createPasswordHash(password);

      await user.updateOne({
        email,
        password: encryptedPassword,
      });

      res.status(200).json();
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const user = await User.findByIdAndRemove(id);
      if (!user) {
        return res.status(404).json();
      }
      res.status(200).json(user);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new UsersController();
