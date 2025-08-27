import { layout } from "./layout.js";

export function aboutPage() {
  return layout(
    "About",
    `
    <h1>About Us</h1>
    <p>This is a demo app built with Hono.</p>
  `
  );
}
