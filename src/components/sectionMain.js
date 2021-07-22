import React, { useState } from "react";
import SectionNavbar from "./sectionNavbar";
import Home from "./pages/home"
import Work from "./pages/work"

function SectionMain() {
  
  const [currentPage, setCurrentPage] = useState("Home");
  
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    // if (currentPage === "ContactMe") {
    //     return <ContactMe />;
    // }
  };
      
  const handlePageChange = (page) => setCurrentPage(page);
  console.log(currentPage);
  
  return <SectionNavbar currentPage={currentPage} handlePageChange={handlePageChange} />;
}

export default SectionMain;