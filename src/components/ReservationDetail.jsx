export const ReservationDetail = ({
  reservationNumber,
  reservationStartDate,
  reservationEndDate,
  reservationAdults,
  reservationChildren,
  reservationCatering,
  reservationPrice,
  reservationCheckInTime,
  reservationCheckOutTime,
}) => {
  return (
    <div className="summary__detail mb-4 col-md-6">
      <h3 className="summary__detail_heading lead">
        <strong>Detail rezervace</strong>
      </h3>
      <div className="summary__number">Číslo: {reservationNumber}</div>
      <div className="summary__dates">
        Pobyt: {reservationStartDate} - {reservationEndDate}
      </div>
      <div className="summary__guests">
        Hosté: {reservationAdults} dospělí, {reservationChildren} dítě
      </div>
      <div className="summary__services">Stravování: {reservationCatering}</div>
      <div className="summary__room-total">{reservationPrice} Kč</div>
      <div className="summary__check-in">
        Check-in: 13.6.2023 do {reservationCheckInTime}
      </div>
      <div className="summary__check-out">
        Check-out: 17.6.2026 do {reservationCheckOutTime}
      </div>
    </div>
  );
};
