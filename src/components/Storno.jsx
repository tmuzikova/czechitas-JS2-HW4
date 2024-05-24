export const Storno = ({ stornoText }) => {
  return (
    <div className="summary__cancel">
      <h3>Storno podmínky</h3>
      <div className="summary__cancel-text">
        <p>{stornoText}</p>
      </div>
    </div>
  );
};
