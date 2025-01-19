import { useState } from "react";
import IconHamburger from "./icons/IconHamburger";
import IconClose from "./icons/IconClose";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Product", "Features", "Pricing"];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            className={`menu-button ${menuOpen ? "rotate" : ""}`}
          >
            {menuOpen ? <IconClose /> : <IconHamburger />}
          </button>

          <ul
            id="mobile-menu"
            className={`mobile-menu ${menuOpen ? "visible" : "hidden"}`}
          >
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
