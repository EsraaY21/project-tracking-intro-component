import IconHamburger from "./icons/IconHamburger";

export default function Header() {
  const navLinks = ["Product", "Features", "Pricing"];

  return (
    <header>
      <nav aria-label="Main navigation">
        <a href="/" aria-label="Go to homepage">
          <img src="assets/images/logo.svg" alt="Company Logo" />
        </a>
        <ul className="nav_deskop">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href="/" aria-label={link}>
                {link}
              </a>
            </li>
          ))}

          <li className="nav_dot" aria-hidden="true"></li>

          <li>
            <a className="nav_login" href="/" aria-label="login">
              Login
            </a>
          </li>
        </ul>

        <div className="nav_mobile">
          <button
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <IconHamburger />
          </button>

          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="/" aria-label={link}>
                  {link}
                </a>
              </li>
            ))}

            <li className="nav_divider" aria-hidden="true"></li>

            <li>
              <a className="nav_login" href="/" aria-label="login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
