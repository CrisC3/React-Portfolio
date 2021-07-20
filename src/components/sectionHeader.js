import React from "react";

function SectionHeader() {

    return (
        <header>
            <div class="header-main d-flex flex-column flex-md-row text-center">
                <h1>Cristobal Canales</h1>
                <nav class="m-0 d-flex flex-column flex-md-row">
                    <a href="#about-me">About Me</a>
                    <a href="#work">Work</a>
                    <a href="#contact-me">Contact Me</a>
                </nav>
            </div>
            <div class="header-img-msg mt-2">
                <img id="personal-img" src="images/personal.png" />
                <div id="greeting-msg">
                    <h1 >Welcome to My Page!</h1>
                </div>
            </div>
        </header>
    );
}

export default SectionHeader;