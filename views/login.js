import { layout } from "./layout.js";

export function loginPage() {
  return layout(
    "Login",
    `
    <h1>Login</h1>
    <form method="POST" action="/login">
      <label>Email:</label><br>
      <input type="text" name="email" /><br><br>
      <label>Password:</label><br>
      <input type="password" name="password" /><br><br>
      <button type="submit">Login</button>
    </form>
  `
  );
}
