export const RoomImg = ({ roomImgUrl }) => {
  return (
    <img
      className="img-fluid rounded mx-auto d-block "
      src={roomImgUrl}
      alt="Hotel"
      style={{ maxWidth: "100%" }}
    />
  );
};
