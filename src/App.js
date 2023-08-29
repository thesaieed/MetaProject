import Home from "./pages/Home";
import BookingPage from "./pages/Booking/BookingPage";
import ConfirmBooking from "./pages/Booking/ConfirmBooking";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmbooking" element={<ConfirmBooking />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/menu" element={<UnderConstruction />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/orderonline" element={<UnderConstruction />} />
        <Route path="/login" element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
