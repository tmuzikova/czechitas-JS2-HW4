import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { BookingSummary } from "../components/BookingSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

document.querySelector("#root").innerHTML = render(
  <div className="container">
    <BookingSummary />
  </div>
);
