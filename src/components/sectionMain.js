import React, { useState } from "react";
import SectionNavbar from "./sectionNavbar";
import Home from "./pages/home"
import Work from "./pages/work"

function SectionMain() {
    
    const [currentPage, setCurrentPage] = useState("Home");
    
    const renderPage = () => {
        if (currentPage === "Home") {
          return <Home currentPage={currentPage} handlePageChange={handlePageChange} />;
        }
        if (currentPage === "Work") {
          return <Work currentPage={currentPage} handlePageChange={handlePageChange} />;
        }
        if (currentPage === "ContactMe") {
        //   return <ContactMe currentPage={currentPage} handlePageChange={handlePageChange} />;
        }
      };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        // <div>{ renderPage() }</div>
        <SectionNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
    );
}

export default SectionMain;