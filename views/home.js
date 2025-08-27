import { layout } from "./layout.js";

export function homePage() {
  return layout(
    "Home",
    `
    <h1>Welcome to Hono App</h1>
    <p>This is the home page.</p>
  `
  );
}
