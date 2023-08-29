import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/styles/bookingStyle.css";
import { fetchAPI, submitAPI } from "../../utils/fakeAPI";
import { useNavigate } from "react-router-dom";
const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ]);
  const [form, setForm] = useState({
    date: "",
    time: availableTimes[0],
    noOfGuests: 0,
    occation: "Birthday",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitAPI(form)) navigate("/confirmbooking", { state: form });
  };
  useEffect(() => {
    setAvailableTimes(fetchAPI(new Date()));
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          height: 100,
          background: "#495e57",
          color: "#fff",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 className="container" style={{ minHeight: "auto" }}>
          Reserve a Table
        </h1>
      </div>
      <div
        id="booking"
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form style={{ display: "grid", gap: 20 }} onSubmit={handleSubmit}>
          <div className="Inputgroup">
            <label htmlFor="res-date">Date</label>
            <input
              required
              type="date"
              id="res-date"
              onChange={(e) => {
                setForm({ ...form, date: e.target.value });
              }}
            />
          </div>
          <div className="Inputgroup">
            <label htmlFor="res-time">Time</label>
            <select
              required
              value={form.time}
              id="res-time "
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            >
              {availableTimes.map((time) => {
                return (
                  <option key={time} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="Inputgroup">
            <label htmlFor="guests">Number of Guests</label>
            <input
              required
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              onChange={(e) => setForm({ ...form, noOfGuests: e.target.value })}
            />
          </div>
          <div className="Inputgroup">
            <label htmlFor="occasion">Occasion</label>
            <select
              required
              value={form.occation}
              id="occasion"
              onChange={(e) => setForm({ ...form, occation: e.target.value })}
            >
              <option key="birthday" value="Birthday">
                Birthday
              </option>
              <option key="anniversary" value="Anniversary">
                Anniversary
              </option>
            </select>
          </div>
          <input
            type="submit"
            aria-label="Click to Reserve Table"
            value="Make Your Reservation"
            id="submit"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};
export default BookingPage;
