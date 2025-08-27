import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";

import { homePage } from "./views/home.js";
import { aboutPage } from "./views/about.js";
import { loginPage } from "./views/login.js";
import { dashboardPage } from "./views/dashboard.js";

// Fake DB
const users = [
  { email: "test@example.com", password: "1234" },
  { email: "admin@example.com", password: "admin" },
];

const app = new Hono();

// Serve static files
app.use("/*", serveStatic({ root: "./public" }));

// Routes
app.get("/", (c) => c.html(homePage()));
app.get("/about", (c) => c.html(aboutPage()));
app.get("/login", (c) => c.html(loginPage()));

app.post("/login", async (c) => {
  const body = await c.req.parseBody();
  const { email, password } = body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return c.redirect(`/dashboard?user=${encodeURIComponent(user.email)}`);
  } else {
    return c.html(
      loginPage() + `<p style="color:red;">Invalid credentials</p>`
    );
  }
});

app.get("/dashboard", (c) => {
  const email = c.req.query("user");
  if (!email) return c.redirect("/login");

  const user = users.find((u) => u.email === email);
  if (!user) return c.redirect("/login");

  return c.html(dashboardPage(user));
});

export default app;

