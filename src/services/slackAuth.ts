import { loginWithSlackToken } from "./auth";

export const handleSlackRedirect = async () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("firebaseCustomToken");

  if (token) {
    await loginWithSlackToken(token);
    window.history.replaceState({}, document.title, "/dashboard");
  }
};
