import React, { useState } from "react";
import Home from "./pages/home"
import SectionNavbar from "./sectionNavbar";

function SectionMain() {
    
    const [currentPage, setCurrentPage] = useState("Home");
    
    const renderPage = () => {
        if (currentPage === "Home") {
          return <Home currentPage={currentPage} handlePageChange={handlePageChange} />;
        }
        if (currentPage === "Work") {
        //   return <Work />;
        }
        if (currentPage === "ContactMe") {
        //   return <ContactMe />;
        }
      };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>{ renderPage() }</div>
    );
}

export default SectionMain;