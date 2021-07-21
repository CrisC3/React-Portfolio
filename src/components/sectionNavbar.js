import React from "react";

function SectionNavbar() {

    const styles = {
        color: "rgb(146, 204, 205)",
        textDecoration: "none",
        margin: "auto 0.2rem",
        fontWeight: "bold",
        borderStyle: "solid",
        borderColor: "rgb(146, 204, 205)"
      };

    return (
        // <nav class="m-0 d-flex flex-column flex-md-row">
        //     <a href="#about-me">About Me</a>
        //     <a href="#work">Work</a>
        //     <a href="#contact-me">Contact Me</a>
        //     {/* <a href="#resume">Resume</a> */}
        // </nav>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#about-me">About Me</a>
            </li>
            <li className="nav-item">
                <a href="#work">Work</a>
            </li>
        </ul>
    );
}

export default SectionNavbar;