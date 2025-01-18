function App() {
  const navLinks = ["Product", "Features", "Pricing"];

  return (
    <>
      <header>
        <nav>
          <a href="/">
            <img src="assets/images/logo.svg" alt="Company Logo" />
          </a>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="/">{link}</a>
              </li>
            ))}

            <li className="nav_dot"></li>

            <li>
              <a className="nav_login" href="/">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero"></section>
      </main>
    </>
  );
}

export default App;
// Login

// New
// Monograph Dashboard

// Powerful insights into your team
// Project planning and time tracking for agile teams

// Schedule a demo
// to see a live preview
