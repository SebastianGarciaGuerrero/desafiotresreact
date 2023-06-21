
const Alert = ({ mensaje }) => {
  return (
    <div className="alert">
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Alert;
