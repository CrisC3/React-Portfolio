import React from "react";
import SectionMain from "./sectionMain";
import SectionNavbar from "./sectionNavbar";

function SectionHeader() {

    return (
        <div>
            <header>
                <div class="header-main d-flex flex-column flex-md-row text-center">
                    <h1>Cristobal Canales</h1>
                    <SectionNavbar />
                </div>
                <div class="header-img-msg">
                    <img id="personal-img" src="images/personal.png" alt="Profile picture" />
                    <div id="greeting-msg">
                        <h1>Welcome to My Page!</h1>
                    </div>
                </div>
            </header>
            <SectionMain />
        </div>
    );
}

export default SectionHeader;