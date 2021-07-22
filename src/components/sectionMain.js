import React, { useState } from "react";

function SectionMain() {
    
    const [currentPage, setCurrentPage] = useState("Home");
    
    const renderPage = () => {
        if (currentPage === "Home") {
        //   return <Home />;
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
        <h1>Section Main</h1>
    );
}

export default SectionMain;