import IconHamburger from "./icons/IconHamburger";

export default function Header() {
  const navLinks = ["Product", "Features", "Pricing"];

  return (
    <header>
      <nav>
        <a href="/">
          <img src="assets/images/logo.svg" alt="Company Logo" />
        </a>
        <ul className="nav_deskop">
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

        <div className="nav_mobile">
          <IconHamburger />
        </div>
      </nav>
    </header>
  );
}
