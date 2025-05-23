import { useLocation } from "react-router-dom";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const path = useLocation();
  const url = path.pathname.split("/")[1];

  window.addEventListener("scroll", () => {
    const top = window.pageYOffset;
    if (top > 96) {
      document.getElementById("header").style.backgroundColor = "#111";
    } else if (url === "" && top <= 96) {
      document.getElementById("header").style.backgroundColor = "transparent";
    } else {
      document.getElementById("header").style.backgroundColor = "#111";
    }
  });

  return (
    <>
      <header
        id="header"
        style={
          url !== ""
            ? { backgroundColor: "#111" }
            : { backgroundcolor: "transparent" }
        }
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="/images/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/fields" className="nav-link" href="#">
                    Science Fields
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/fields" className="nav-link" href="#">
                    Course Types
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/fields" className="nav-link" href="#">
                    Facilities
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/fields" className="nav-link" href="#">
                    Wards
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/fields" className="nav-link" href="#">
                    Branches
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/fields" className="nav-link" href="#">
                    Contact Us
                  </Link>
                </li>

                <li className="nav-item icons-holder">
                  <span className="separator">|</span>
                  <div className="social-icons">
                    <div className="social">
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>

                    <div className="social">
                      <i className="fa-brands fa-twitter"></i>
                    </div>

                    <div className="social">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
