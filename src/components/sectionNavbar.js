import React from "react";

function SectionNavbar({ currentPage, handlePageChange }) {

    const styles = {
        navUl: {
            backgroundColor: "lightgoldenrodyellow"
        },
        links: {
            // borderTopStyle: "solid",
            // borderRightStyle: "solid",
            // borderLeftStyle: "solid",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: "0px",
            // backgroundColor: "white"
            fontWeight: "bold"
        }
      };
    
      return (
          <ul className="nav nav-tabs align-self-md-end" style={styles.navUl}>
              <li className="nav-item">
                <a href="#home" onClick={() => handlePageChange("Home")} style={styles.links} className={currentPage === "Home" ? "nav-link active" : "nav-link"}>Home</a>
                </li>
            <li className="nav-item">
                <a href="#work" onClick={() => handlePageChange("Work")} style={styles.links} className={currentPage === "Work" ? "nav-link active" : "nav-link"}>Work</a>
            </li>
            <li className="nav-item">
                <a href="#contact-me" onClick={() => handlePageChange("ContactMe")} style={styles.links} className={currentPage === "ContactMe" ? "nav-link active" : "nav-link"}>Contact Me</a>
            </li>
        </ul>
    );
}

export default SectionNavbar;