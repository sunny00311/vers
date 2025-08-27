export function layout(title, content) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/login">Login</a>
      <a href="/dashboard">Dashboard</a>
    </nav>
    <main style="padding:20px;">
      ${content}
    </main>
  </body>
  </html>
  `;
}
