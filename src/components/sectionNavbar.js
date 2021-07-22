import React from "react";

function SectionNavbar({ currentPage, handlePageChange }) {

    const styles = {
        color: "black",
        textDecoration: "none",
        margin: "auto 0.2rem",
        fontWeight: "bold",
        borderTopStyle: "solid",
        borderRightStyle: "solid",
        borderLeftStyle: "solid",
        borderColor: "white",
        padding: "0.15rem",
        backgroundColor: "white"
      };

    return (
        <div class="container">
            <ul className="nav nav-tabs align-self-md-end">
                <li className="nav-item">
                    <a href="#home" onClick={() => handlePageChange("Home")} style={styles} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
                </li>
                <li className="nav-item">
                    <a href="#work" onClick={() => handlePageChange("Work")} style={styles}>Work</a>
                </li>
                <li className="nav-item">
                    <a href="#contact-me" onClick={() => handlePageChange("ContactMe")} style={styles}>Contact Me</a>
                </li>
            </ul>
        </div>
    );
}

export default SectionNavbar;