import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { BookingSummary } from "../components/BookingSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const reservationData = {
  number: "459787 - 745",
  startDate: "13.6.2023",
  endDate: "17.6.2026",
  adults: 2,
  children: 1,
  catering: "žadné",
  price: 7200,
  checkInTime: "18:00",
  checkOutTime: "10:00",
};

const {
  number,
  startDate,
  endDate,
  adults,
  children,
  catering,
  price,
  checkInTime,
  checkOutTime,
} = reservationData;

document.querySelector("#root").innerHTML = render(
  <div className="container">
    <BookingSummary
      reservationNumber={number}
      reservationStartDate={startDate}
      reservationEndDate={endDate}
      reservationAdults={adults}
      reservationChildren={children}
      reservationCatering={catering}
      reservationPrice={price}
      reservationCheckInTime={checkInTime}
      reservationCheckOutTime={checkOutTime}
    />
  </div>
);
