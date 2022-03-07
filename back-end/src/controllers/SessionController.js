import jwt from "jsonwebtoken";
import { checkPassword } from "../services/auth";
import User from "../models/UserModel";
import authConfig from "../config/jwt";
class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ msg: "Usuário ou senha inválidos!" });
    }

    if (!checkPassword(password, user.password)) {
      return res.status(401).json({ msg: "Usuário ou senha inválidos!" });
    }

    const id = user.id;
    return res.json({
      user: {
        id,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: 3600,
      }),
    });
  }
}

export default new SessionController();
