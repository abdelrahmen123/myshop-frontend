export default function setTokenInLocalStorage(token: string) {
  const oneDayInMs: number = 24 * 60 * 60 * 1000;
  const expiresAt: number = Date.now() + oneDayInMs;

  localStorage.setItem("token", token);
  localStorage.setItem("expiresAt", expiresAt.toString());
}
