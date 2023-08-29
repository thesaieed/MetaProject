import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TbError404 } from "react-icons/tb";
const NotFound = () => {
  return (
    <>
      <Header />
      <div
        id="booking"
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TbError404 fontSize={60} />
        <h2>Page Not Found </h2>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
