import paypal from "../../assets/images/paypal.png";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import Button from "../Button";
import { styles } from "./styles";
import { colors } from "../../constants/colors";

const Functionality = () => {
  return (
    <div style={styles.root}>
      <span style={styles.title}>Discover the Heart of Our Functionality</span>
      <div style={styles.rootContainer}>
        <div style={styles.colorContainer}>
          <span style={styles.colorTitle}>
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </span>
          <p style={styles.colorSubtitle}>
            Immerse your customers in a branded experience by personalizing the
            colors on your tracking page.
          </p>
          <div style={styles.category}>
            <span style={styles.categoryTitle}>Accent Color</span>
            <div style={styles.inputContainer}>
              <input type="text" placeholder="FF9898" style={styles.input} />
              <div
                style={{
                  ...styles.categoryColor,
                  backgroundColor: colors.red200,
                }}
              ></div>
            </div>
          </div>
          <div style={styles.category}>
            <span style={styles.categoryTitle}>Text Color</span>
            <div style={styles.inputContainer}>
              <input type="text" placeholder="571010" style={styles.input} />
              <div
                style={{
                  ...styles.categoryColor,
                  backgroundColor: colors.red300,
                }}
              ></div>
            </div>
          </div>
          <div style={styles.category}>
            <span style={styles.categoryTitle}>Background Color</span>
            <div style={styles.inputContainer}>
              <input type="text" placeholder="FFEAEA" style={styles.input} />
              <div
                style={{
                  ...styles.categoryColor,
                  backgroundColor: colors.red100,
                }}
              ></div>
            </div>
          </div>
          <div style={styles.button}>
            <Button title={"Preview"} mode="light" />
            <Button title={"Apply Colors"} />
          </div>
        </div>
        <div style={styles.exclusiveRoot}>
          <div style={styles.exclusiveContainer}>
            <span style={styles.exclusiveTitle}>
              Exclusive Onboarding Support for High-Volume Brands
            </span>
            <p style={styles.exclusiveSubtitle}>
              Unlock personalized guidance! Book a one-on-one onboarding call to
              streamline your experience.
            </p>
            <Button title={"Schedule A Call"} />
          </div>
          <div style={styles.exclusiveContainer}>
            <span style={styles.exclusiveTitle}>
              Explore Our Integrated Ecosystem
            </span>
            <p style={styles.exclusiveSubtitle}>
              Discover a variety of popular integrations tailored for your
              convenience.
            </p>
            <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
              <img src={paypal} height={"35"} width={"35"} />
              <img src={logo1} height={"35"} width={"35"} />
              <img src={logo2} height={"35"} width={"35"} />
              <img src={logo3} height={"35"} width={"35"} />
              <img src={logo4} height={"35"} width={"35"} />
            </div>
            <Button title={"Explore Integrations"} />
          </div>
        </div>
        <div style={styles.custom}>
          <span style={styles.exclusiveTitle}>
            Seamlessly Integrate Custom HTML Elements
          </span>
          <p style={{ ...styles.exclusiveSubtitle, paddingRight: 40 }}>
            Unleash creativity with our Custom HTML feature. Add links, custom
            messages, or any HTML content to elevate the tracking page
            experience for your customers.
          </p>
          <div style={styles.linkContainer}>
            <span style={styles.linkTitle}>HTML Link</span>
            <input type="text" placeholder="Value" style={styles.linkInput} />
          </div>
          <div style={styles.button}>
            <Button title={"Preview"} mode="light" />
            <Button title={"Apply Colors"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
