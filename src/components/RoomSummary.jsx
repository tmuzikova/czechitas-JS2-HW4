export const RoomSummary = ({ roomNum, roomName, roomPrice }) => {
  return (
    <div className="summary__room">
      <h3 className="summary__name">Pokoj {roomNum}</h3>
      <div className="row">
        <div className="summary__room-type col-md-6">{roomName}</div>
        <div className="summary__room-price col-md-6">{roomPrice} Kč / noc</div>
      </div>
    </div>
  );
};
