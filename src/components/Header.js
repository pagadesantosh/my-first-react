const Title = () => {
  return (
    <a className="navbar-brand" href="index.html">
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
          <a className="nav-link active" href="index.html">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="about.html">
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="news.html">
            Our Updates
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="contact.html">
            Contact
          </a>
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
