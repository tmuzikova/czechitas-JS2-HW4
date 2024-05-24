import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./BookingSummary.css";
import { Storno } from "./Storno";
import { RoomImg } from "./RoomImg";
import { RoomSummary } from "./RoomSummary";
import { HotelInfo } from "./HotelInfo";
import { DoplnkoveSluzby } from "./DoplnkoveSluzby";
import { ReservationDetail } from "./ReservationDetail";

export const BookingSummary = () => {
  const roomImgUrl =
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960";

  const roomNum = 2;
  const roomName = "Dvoulůžkový s dětskou přistýlkou";
  const roomPrice = 1800;

  const reservationNum = "459787 - 745";
  const reservationStartDate = "13.6.2023";
  const reservationEndDate = "17.6.2026";
  const reservationAdults = 2;
  const reservationChildren = 1;
  const reservationCatering = "žádné";
  const reservationPrice = 7200;
  const reservationCheckInTime = "18:00";
  const reservationCheckOutTime = "10:00";

  const parkingPrice = 200;
  const breakfastPrice = 150;
  const wellnessPrice = "Zdarma";
  const wifiPrice = "Zdarma na všech pokojích";

  const stornoText = `Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována
          žádná částka. Pokud zrušíte rezervaci později nebo nedorazíte vůbec,
          bude Vám účtována částka za první noc pobytu.`;

  return (
    <div className="container-booking my-4 summary">
      <h2 className="text-center display-4">Booking Summary</h2>
      <hr></hr>

      <div className="summary__head mb-4">
        <HotelInfo />
        <RoomImg roomImgUrl={roomImgUrl} />
        <RoomSummary
          roomNum={roomNum}
          roomName={roomName}
          roomPrice={roomPrice}
        />
        <hr></hr>
      </div>

      <div className="row">
        <ReservationDetail
          reservationNum={reservationNum}
          reservationStartDate={reservationStartDate}
          reservationEndDate={reservationEndDate}
          reservationAdults={reservationAdults}
          reservationChildren={reservationChildren}
          reservationCatering={reservationCatering}
          reservationPrice={reservationPrice}
          reservationCheckInTime={reservationCheckInTime}
          reservationCheckOutTime={reservationCheckOutTime}
        />
        <DoplnkoveSluzby
          parkingPrice={parkingPrice}
          breakfastPrice={breakfastPrice}
          wellnessPrice={wellnessPrice}
          wifiPrice={wifiPrice}
        />
      </div>

      <hr></hr>
      <Storno stornoText={stornoText} />
    </div>
  );
};
