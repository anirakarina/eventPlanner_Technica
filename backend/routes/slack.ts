import express from "express";
import axios from "axios";
import { adminAuth } from "../firebaseAdmin";

const router = express.Router();

router.get("/login", (req, res) => {
  const redirectUri = `${process.env.SLACK_REDIRECT_URI}`;
  const clientId = process.env.SLACK_CLIENT_ID;
  res.redirect(`https://slack.com/oauth/v2/authorize?client_id=${clientId}&scope=identity.basic&redirect_uri=${redirectUri}`);
});

router.get("/callback", async (req, res) => {
  const { code } = req.query;
  const tokenRes = await axios.post("https://slack.com/api/oauth.v2.access", null, {
    params: {
      code,
      client_id: process.env.SLACK_CLIENT_ID,
      client_secret: process.env.SLACK_CLIENT_SECRET,
      redirect_uri: process.env.SLACK_REDIRECT_URI
    }
  });

  const slackUser = tokenRes.data.authed_user;
  const firebaseUser = await adminAuth.createUser({
    uid: `slack:${slackUser.id}`,
    displayName: slackUser.name
  });

  const customToken = await adminAuth.createCustomToken(firebaseUser.uid);
  res.redirect(`${process.env.FRONTEND_URL}/login?token=${customToken}`);
});

export default router;
