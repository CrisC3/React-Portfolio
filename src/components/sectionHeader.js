import React, { useState } from "react";
import SectionNavbar from "./sectionNavbar";
import Home from "./pages/home"
import Work from "./pages/work"
import ContactMe from "./pages/contact";

function SectionHeader() {
  
  const [currentPage, setCurrentPage] = useState("Home");
  
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "ContactMe") {
        return <ContactMe />;
    }
  };
      
  const handlePageChange = (page) => setCurrentPage(page);
  

    return (
        <div>
            <header>
                <div class="header-main d-flex flex-column flex-md-row text-center">
                    <h1>Cristobal Canales</h1>
                    <SectionNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
                <div class="header-img-msg">
                  {console.log(window.location)}
                    <img id="personal-img" src={process.env.PUBLIC_URL + "/images/personal.png"} alt="Profile" />
                    <div id="greeting-msg">
                        <h1>Welcome to My Page!</h1>
                    </div>
                </div>
            </header>
            {/* <SectionMain /> */}
            <div className="container">
              {renderPage()}
            </div>
        </div>
    );
}

export default SectionHeader;