function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,.9), transparent)",
        padding: "15px 40px",
      }}
    >
      <div className="container-fluid">

        {/* Logo */}
        <a
          className="navbar-brand fw-bold"
          href="#"
          style={{
            color: "#E50914",
            fontSize: "32px",
            letterSpacing: "2px",
          }}
        >
          CINEVERSE
        </a>

        {/* Menu */}
        <ul className="navbar-nav me-auto ms-5">

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Movies
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              TV Shows
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              My List
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <div className="d-flex align-items-center">

          <button className="btn btn-outline-light me-3">
            🔍
          </button>

          <button className="btn btn-danger me-2">
            Login
          </button>

          <button className="btn btn-light">
            Register
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;