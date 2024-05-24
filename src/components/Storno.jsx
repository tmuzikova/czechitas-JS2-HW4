export const Storno = ({ stornoText }) => {
  return (
    <div className="summary__cancel">
      <h3 className="lead">
        <strong>Storno podmínky</strong>
      </h3>
      <div className="summary__cancel-text">
        <p>{stornoText}</p>
      </div>
    </div>
  );
};
