import { WebClient } from "@slack/web-api";
import { InstallProvider } from "@slack/oauth";
import { slackConfig } from "../config/slack";
import { Request, Response } from "express";

const installer = new InstallProvider({
  clientId: slackConfig.clientId,
  clientSecret: slackConfig.clientSecret,
});

export const slackLogin = async (req: Request, res: Response) => {
  const url = `https://slack.com/oauth/v2/authorize?client_id=${slackConfig.clientId}&scope=identity.basic,identity.email&redirect_uri=${slackConfig.redirectUri}`;
  res.redirect(url);
};

export const slackCallback = async (req: Request, res: Response) => {
  try {
    const result = await installer.authorize({
      clientId: slackConfig.clientId,
      clientSecret: slackConfig.clientSecret,
      code: req.query.code as string,
      redirectUri: slackConfig.redirectUri,
    });

    const web = new WebClient(result.accessToken);
    const userInfo = await web.users.identity();
    res.json(userInfo);
  } catch (error) {
    res.status(400).json({ error });
  }
};
