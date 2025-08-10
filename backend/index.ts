import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import admin from "firebase-admin";
import slackAuthRoutes from "./auth/slack";

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_KEY as string)),
});

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

app.use("/auth", slackAuthRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend running on port ${process.env.PORT || 5000}`);
});
