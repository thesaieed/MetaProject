import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoConstructSharp } from "react-icons/io5";
const UnderConstruction = () => {
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
        <IoConstructSharp fontSize={60} />
        <h2>Page is Under Construction! </h2>
      </div>
      <Footer />
    </>
  );
};

export default UnderConstruction;
