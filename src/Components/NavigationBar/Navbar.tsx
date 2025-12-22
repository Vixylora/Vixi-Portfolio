import { Navdata } from "./Navdata";
import "./Navbar.css";

// Will be added later when there is a better icon, css line 35, navbar.css
// import favedicon from "../../assets/Target2.jpeg";

function Navbar() {
  return (
    <>
      <div id="navbar-container">
        <div id="navbar">
          <div id="nav-title">
            <h2 className="nav-text">VIXI</h2>
          </div>
          <div id="nav-items">
            {Navdata.map((items, index) => {
              return (
                <a key={index} href={items.path} className={items.cName}>
                  {items.title}
                </a>
              );
            })}
          </div>
          <div id="contact-button" className="cursor-target">
            <a href="#ContactMe" id="contact-btn">
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
