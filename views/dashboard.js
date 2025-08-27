import { layout } from "./layout.js";

export function dashboardPage(user) {
  return layout(
    "Dashboard",
    `
    <h1>Dashboard</h1>
    <p>Welcome, ${user.email}!</p>
  `
  );
}
