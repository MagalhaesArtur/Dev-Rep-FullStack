import User from "../models/UserModel";
import Repository from "../models/Repository";

class RepositoriesController {
  async index(req, res) {
    try {
      const userId = req.params.user_id;
      const { q } = req.query;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json();
      }

      let query = {};

      if (q) {
        query = { url: { $regex: q } };
      }

      const repositories = await Repository.find({
        UserId: userId,
        ...query,
      });

      return res.json(repositories);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async create(req, res) {
    try {
      const userId = req.params.user_id;

      const user = await User.findById(userId);
      const { name, url } = req.body;
      if (!user) {
        return res.status(404).json();
      }

      const repository = await Repository.findOne({ UserId: userId, url });
      if (repository) {
        return res.status(422).json({ msg: "Este repositório já existe!" });
      }

      const newRepository = await Repository.create({
        name,
        url,
        UserId: userId,
      });

      return res.status(201).json(newRepository);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async destroy(req, res) {
    try {
      const userId = req.params.user_id;
      const id = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json();
      }
      const repository = await Repository.findOne({
        UserId: userId,
        id,
      });

      if (!repository) {
        res.status(404).json();
      }

      await Repository.findOneAndRemove({
        _id: id,
      });
      res.status(200).json();
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new RepositoriesController();
