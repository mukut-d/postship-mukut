import { colors } from "../../constants/colors";
import Button from "../Button";
import "../index.css";
import danger from "../../assets/images/warning.png";
import { styles } from "./styles";

const Card = ({
  buttonText1,
  buttonText2 = "Explore Your Orders",
  buttonMode1 = "light",
  buttonMode2 = "dark",
  Icon,
  title = "Order Quota Pending",
  subtitle = "Your Order quota is about to end as 394/400 orders has been placed.",
  backgroundColor = colors.white,
}) => {
  let dark;
  let light;
  if (buttonMode1 == "dark" || buttonMode2 == "dark") {
    dark = {
      width: "50%",
      padding: 5,
      marginLeft: 5,
      borderRadius: 10,
      backgroundColor: colors.black100,
      color: colors.white,
      fontSize: 12,
    };
  } else {
    light = {
      width: "30%",
      padding: 5,
      borderStyle: "none",
      borderRadius: 10,
      backgroundColor: colors.white,
      color: colors.black100,
      fontSize: 12,
      marginRight: 5,
    };
  }
  return (
    <div
      className="card"
      style={{ ...styles.root, backgroundColor: backgroundColor }}
    >
      <div style={styles.title}>
        {!!Icon && <img src={Icon} height={"14"} width={"14"} />}
        <h3>{title}</h3>
      </div>
      <span style={styles.subtitle}>{subtitle}</span>

      <div style={styles.btnContainer}>
        {!!buttonText1 && (
          <button className="card" style={light}>
            {buttonText1}
          </button>
        )}
        {!!buttonText2 && <button style={dark}>{buttonText2}</button>}
      </div>
    </div>
  );
};

export default Card;
