import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./BookingSummary.css";

export const BookingSummary = () => {
  return (
    <div className="container-booking my-4 summary">
      <h2 className="text-center display-4">Booking Summary</h2>
      <hr></hr>
      <div className="summary__head mb-4">
        <div className="summary__head-property mb-3">
          <h3 className="summary__name display-6">Hotel Lesní Zátiší</h3>
          <div className="summary__address">Malohradské skály 347/21</div>
          <div className="summary__city">Malohradská ves</div>
          <div className="summary__rating">⭐4.65</div>
        </div>

        <div className="">
          <img
            className="img-fluid rounded mx-auto d-block "
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"
            alt="Hotel"
            style={{ maxWidth: "100%" }}
          />
        </div>

        <div className="summary__room">
          <h3 className="summary__name">Pokoj 2</h3>
          <div className="summary__room-type">
            Dvoulůžkový s dětskou přistýlkou
          </div>
          <div className="summary__room-price">1 800 Kč / noc</div>
        </div>
      </div>
      <div className="row">
        <div className="summary__detail mb-4 col-md-6">
          <h3>Detail rezervace</h3>
          <div className="summary__number">Číslo: 459787-745</div>
          <div className="summary__dates">Pobyt: 13.6.2023 - 17.6.2026</div>
          <div className="summary__guests">Hosté: 2 dospělí, 1 dítě</div>
          <div className="summary__services">Stravování: žádné</div>
          <div className="summary__room-total">7 200 Kč</div>
          <div className="summary__check-in">Check-in: 13.6.2023 do 18:00</div>
          <div className="summary__check-out">
            Check-out: 17.6.2026 do 10:00
          </div>
        </div>
        <div className="summary__services mb-4 col-md-6">
          <h3>Doplňkové služby</h3>
          <div className="summary__service">Parkování: 200 Kč / noc</div>
          <div className="summary__service">Snídaně: 150 Kč / noc</div>
          <div className="summary__service">Wellness: Zdarma</div>
          <div className="summary__service">Wifi: Zdarma na všech pokojích</div>
        </div>
      </div>
      <div className="summary__cancel">
        <h3>Storno podmínky</h3>
        <div className="summary__cancel-text">
          <p>
            Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám
            účtována žádná částka. Pokud zrušíte rezervaci později nebo
            nedorazíte vůbec, bude Vám účtována částka za první noc pobytu.
          </p>
        </div>
      </div>
    </div>
  );
};
