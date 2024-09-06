import { colors } from "../../constants/colors";
import { styles } from "./styles";

const Header = () => {
  const navPartner = { ...styles.navTitle };
  navPartner["display"] = "flex";
  navPartner["flex"] = "1";

  return (
    <div className="header" style={styles.root}>
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center ",
          alignItems: "center",
        }}
      >
        <span className="navItem" style={styles.navTitle}>
          Home
        </span>
        <div style={styles.line}></div>
      </div>
      <span className="navItem" style={styles.navTitle}>
        Orders
      </span>
      <span className="navItem" style={styles.navTitle}>
        Integrations
      </span>
      <div>
        <span className="navItem" style={styles.navTitle}>
          Tracking Page
        </span>

        {/* <img src={images.arrow} className="arrow" /> */}
      </div>
      <span className="navItem" style={navPartner}>
        Partner with Us
      </span>
      <div
        style={{
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          paddingBottom: 5,
        }}
      >
        <span className="navItem" style={styles.navTitle}>
          Search
        </span>
      </div>
      <div>
        <span className="navItem" style={styles.navTitle}>
          Account
        </span>
      </div>
      <div>
        <span className="navItem" style={styles.navTitle}>
          Settings
        </span>
      </div>
    </div>
  );
};

export default Header;
