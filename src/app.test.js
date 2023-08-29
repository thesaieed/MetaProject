import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fetchAPI } from "./utils/fakeAPI";
import BookingPage from "./pages/Booking/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test("Render Submit Button", () => {
  render(<BookingPage />);
  const submitButton = screen.getByText("Make Your Reservation");
  expect(submitButton).toBeInTheDocument();
});
test("FetchAPI should give a non-empty array", () => {
  const dates = fetchAPI(new Date());
  expect(Array.isArray(dates)).toBe(true);
  expect(dates).not.toHaveLength(0);
});
