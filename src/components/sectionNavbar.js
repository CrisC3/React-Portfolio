import React from "react";

function SectionNavbar() {

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
        <ul className="nav nav-tabs align-self-end">
            <li className="nav-item">
                <a href="/" style={styles}>Home</a>
            </li>
            <li className="nav-item">
                <a href="#work" style={styles}>Work</a>
            </li>
            <li className="nav-item">
                <a href="#contact-me" style={styles}>Contact Me</a>
            </li>
        </ul>
    );
}

export default SectionNavbar;