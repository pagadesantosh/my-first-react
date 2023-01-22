import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a className="navbar-brand" href="/">
      <img
        className="logo"
        src="https://www.freepnglogos.com/uploads/hotel-logo-png/hotel-marriott-logo-png-15.png"
        alt="logo"
      />
    </a>
  );
};

const Menu = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/About">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Updates">
            Updates
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

const ToggleButton = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

const Cart = () => {
  return (
    <div className="d-none d-lg-block">
      <button
        type="button"
        className="custom-btn btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#BookingModal"
      >
        Cart
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        {/* Mobile toggle button */}
        <ToggleButton />
        {/* logo */}
        <Title />
        {/* Menu */}
        <Menu />
        {/* Cart */}
        <Cart />
      </div>
    </nav>
  );
};

export default Header;
