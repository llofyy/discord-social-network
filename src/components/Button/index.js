import "./style.css";

function Button({ value, background, border, textColor, onClick }) {
  const style = {
    backgroundColor: background || "#ffff",
    border: border || "none",
    color: textColor || "black",
  };

  return (
    <button className="button" style={style} onClick={onClick}>
      <b>{value}</b>
    </button>
  );
}

export default Button;
