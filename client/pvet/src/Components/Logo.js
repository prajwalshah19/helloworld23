import "./styles.css";
import reactLogo from "./reactLogo.png";
function Logo(props) {
  return (
    <div className="app">
      <img
        src={reactLogo}
        style={{
            position: "absolute",
            top: 0,
            left: 0,
        }}
      />
    </div>
  );
}
export default Logo;
