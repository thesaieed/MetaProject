import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaCircleCheck } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
const ConfirmBooking = () => {
  const location = useLocation();
  const form = location.state;
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
        <FaCircleCheck fontSize={60} />
        <h2>Your Booking has been Confirmed!</h2>
        <div>
          <table style={{ marginTop: 20 }}>
            <tbody>
              <tr>
                <th style={{ textAlign: "right", paddingRight: 10 }}>Date</th>
                <td>
                  {new Date(form.date).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: "right", paddingRight: 10 }}>Time</th>
                <td>{form.time}</td>
              </tr>
              <tr>
                <th style={{ textAlign: "right", paddingRight: 10 }}>
                  Number of Guests
                </th>
                <td>{form.noOfGuests}</td>
              </tr>
              <tr>
                <th style={{ textAlign: "right", paddingRight: 10 }}>
                  Occation
                </th>
                <td>{form.occation}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmBooking;
