import Button from "../Button";
import "./style.css";

function HomeNavbar() {
  return (
    <nav className="home-navbar">
      <div className="navbar-title">
        <b>DISCORD SOCIAL</b>
      </div>
      <div className="navbar-options">
        <Button value="Login" textColor={"#8257e5"} />
      </div>
    </nav>
  );
}

export default HomeNavbar;
