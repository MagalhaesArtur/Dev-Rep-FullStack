import { header } from "express/lib/request";
import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfig from "../config/jwt";

export default async (req, res, next) => {
  const authKey = req.headers.authorization;

  if (!authKey) {
    res.status(401).json({ msg: "Token não enviado!" });
  }

  const [, token] = authKey.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
    return next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({ error: "Token inválido!" });
  }
};
