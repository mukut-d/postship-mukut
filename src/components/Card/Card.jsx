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
      width: "10vw",
      height: "4vh",
      padding: 5,
      marginLeft: 5,
      borderRadius: 10,
      backgroundColor: colors.black100,
      color: colors.white,
      fontSize: 12,
      fontFamily: "Inter500",
    };
  } else {
    light = {
      width: "10vw",
      height: "40vh",
      padding: 5,
      borderStyle: "none",
      borderRadius: 10,
      backgroundColor: colors.white,
      color: colors.black100,
      fontSize: 12,
      marginRight: 5,
      boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
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
          <Button
            title={buttonText1}
            mode="light"
            className={"card"}
            style={light}
          />
        )}
        {!!buttonText2 && (
          <Button title={buttonText2} className={"card"} style={dark} />
        )}
      </div>
    </div>
  );
};

export default Card;
