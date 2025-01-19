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
        <section className="hero">
          <div className="hero_content">
            <p className="hero_title_top">
              <span className="badge">New</span>
              <span>Monograph Dashboard</span>
            </p>
            <h1>Powerful insights into your team</h1>
            <p className="hero_desc">
              Project planning and time tracking for agile teams
            </p>
            <div className="hero_cta">
              <a href="">Schedule a demo</a>
              <span>to see a live preview</span>
            </div>
          </div>
          <img src="assets/images/illustration-devices.svg" alt="Hero Image" />
        </section>
      </main>
    </>
  );
}

export default App;
