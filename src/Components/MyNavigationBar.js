import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from "./MyButton";

function MyNavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://wpdemothemes.com/edusion/wp-content/themes/edusion/assets/images/all-img/logo.png"
            alt="Edusion"
            height="40"
          />
        </Link>

        {/* Toggler/collapse */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Pages */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>

            {/* Courses */}
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>

            {/* Blog & Contact */}
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex my-navbar-buttons">
            <MyButton x="Contact" className="me-2" />
            <MyButton x="Account" className="me-2" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavigationBar;
