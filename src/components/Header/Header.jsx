import { colors } from "../../constants/colors";
import { styles } from "./styles";
import arrow from "../../assets/images/arrow.png";
import search from "../../assets/images/search.png";
import settings from "../../assets/images/settings.png";
import user from "../../assets/images/user.png";

const Header = () => {
  const navPartner = { ...styles.navTitle };
  navPartner["display"] = "flex";
  navPartner["flex"] = "1";

  return (
    <div className="header" style={styles.root}>
      <div style={styles.navContainer}>
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

        <img src={arrow} height={"5"} width={"10"} className="arrow" />
      </div>
      <span className="navItem" style={navPartner}>
        Partner with Us
      </span>
      <div style={styles.search}>
        <img src={search} height={"13"} width={"13"} />
        <input
          className="navItem"
          style={styles.navTitle}
          placeholder="Search"
        />
      </div>
      <div style={{ marginleft: 15, marginRight: 15 }}>
        <img src={user} height={"13"} width={"13"} />
        <span className="navItem" style={styles.navTitle}>
          Account
        </span>
      </div>
      <div style={{ marginleft: 15, marginRight: 15 }}>
        <img src={settings} height={"13"} width={"13"} />
        <span className="navItem" style={styles.navTitle}>
          Settings
        </span>
      </div>
    </div>
  );
};

export default Header;
