import admin from "../config/firebase";
// import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userRecord = await admin.auth().createUser({ email, password });
    res.json({ uid: userRecord.uid });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await admin.auth().getUserByEmail(email);

    const token = jwt.sign({ uid: user.uid }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
