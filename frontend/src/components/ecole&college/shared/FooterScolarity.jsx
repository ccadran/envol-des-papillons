import React from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import PapillonLogo from "../../shared/PapillonLogo";
import "styles/shared/_footerGlobal.scss";

const FooterScolarity = ({ etablissement }) => {
  const location = useLocation();

  return (
    <footer className="footer-scolarity">
      <div className="main-nav">
        <ul>
          <NavLink to="/ecole/presentation">
            <PapillonLogo />
            <h5
              className={`nav-link ${
                location.pathname.includes("/ecole") ? "active" : ""
              }`}
            >
              L'école
            </h5>
          </NavLink>
          <NavLink to="/college/presentation">
            {" "}
            <PapillonLogo />
            <h5
              className={`nav-link ${
                location.pathname.includes("/college") ? "active" : ""
              }`}
            >
              Le collège
            </h5>
          </NavLink>
          <NavLink
            to="/etablissement"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            {" "}
            <PapillonLogo />
            <h5
              className={`nav-link ${
                location.pathname.includes("/etablissement") ? "active" : ""
              }`}
            >
              L'établissement
            </h5>
          </NavLink>
        </ul>
      </div>
      <div className="footer-content">
        <div className="secondary-nav">
          <ul>
            <NavLink
              to={`/${etablissement}/presentation`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Présentation</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/pedagogie`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Pédagogie</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/infos-pratiques`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Infos pratiques</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/inscription`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Inscription</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/FAQ`}
              className="nav-link"
              activeclassname="active"
            >
              <li>FAQ</li>
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link"
              activeclassname="active"
            >
              <li>Contact</li>
            </NavLink>
            <NavLink to="/blog" className="nav-link" activeclassname="active">
              <li>Blog</li>
            </NavLink>
            <NavLink
              to={`/${etablissement}/qui-sommes-nous`}
              className="nav-link"
              activeclassname="active"
            >
              <li>Notre histoire</li>
            </NavLink>
          </ul>
        </div>
        <div className="footer-contact">
          <a href="mailto:contact@lenvoldespapillons33.com ">
            contact@lenvoldespapillons33.com
          </a>

          <a href="tel:+33 6 05 39 03 73">06 05 39 03 73</a>

          <div className="social-logos">
            <Link
              to={
                location.pathname.includes("college")
                  ? "https://www.instagram.com/college.lenvol.bordeaux/?utm_medium=copy_link"
                  : "https://www.instagram.com/ecole.montessori_bordeaux/"
              }
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to={
                location.pathname.includes("college")
                  ? "https://www.facebook.com/lenvolBordeauxmetropole/"
                  : "https://www.facebook.com/profile.php?id=100070321285628"
              }
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="under-footer">
        <NavLink to="/cgu" className="nav-link">
          <li>CGU</li>
        </NavLink>
      </div>
    </footer>
  );
};

export default FooterScolarity;
