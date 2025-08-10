import express from "express";
import axios from "axios";
import admin from "firebase-admin";

const router = express.Router();

const SLACK_CLIENT_ID = process.env.SLACK_CLIENT_ID!;
const SLACK_CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET!;
const SLACK_REDIRECT_URI = `${process.env.BACKEND_URL}/auth/slack/callback`;

// Step 1: Redirect to Slack OAuth
router.get("/slack", (req, res) => {
  const url = `https://slack.com/oauth/v2/authorize?client_id=${SLACK_CLIENT_ID}&scope=identity.basic,identity.email&redirect_uri=${encodeURIComponent(SLACK_REDIRECT_URI)}`;
  res.redirect(url);
});

// Step 2: Slack OAuth callback
router.get("/slack/callback", async (req, res) => {
  const code = req.query.code as string;

  try {
    // Exchange code for Slack token
    const tokenRes = await axios.post("https://slack.com/api/oauth.v2.access", null, {
      params: {
        client_id: SLACK_CLIENT_ID,
        client_secret: SLACK_CLIENT_SECRET,
        code,
        redirect_uri: SLACK_REDIRECT_URI,
      },
    });

    const { access_token } = tokenRes.data;
    if (!access_token) throw new Error("Slack auth failed");

    // Get user identity
    const userRes = await axios.get("https://slack.com/api/users.identity", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const slackUser = userRes.data.user;
    const email = slackUser.email;

    const firebaseToken = await admin.auth().createCustomToken(`slack:${slackUser.id}`, { email });

    res.redirect(`${process.env.FRONTEND_URL}/login?firebaseCustomToken=${firebaseToken}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Slack login failed");
  }
});

export default router;
