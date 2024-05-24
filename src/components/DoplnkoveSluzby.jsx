export const DoplnkoveSluzby = ({
  parkingPrice,
  breakfastPrice,
  wellnessPrice,
  wifiPrice,
}) => {
  return (
    <div className="summary__services mb-4 col-md-6">
      <h3>Doplňkové služby</h3>
      <div className="summary__service">Parkování: {parkingPrice} Kč / noc</div>
      <div className="summary__service">Snídaně: {breakfastPrice} Kč / noc</div>
      <div className="summary__service">Wellness: {wellnessPrice}</div>
      <div className="summary__service">Wifi: {wifiPrice}</div>
    </div>
  );
};
