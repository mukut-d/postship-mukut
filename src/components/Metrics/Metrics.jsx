import { styles } from "./styles";
import calendar from "../../assets/images/calendar.png";
import save from "../../assets/images/tray.png";
import eye from "../../assets/images/eye.png";
import { colors } from "../../constants/colors";
import Chart from "../Chart";
import Button from "../Button";

const Metrics = () => {
  return (
    <div style={styles.root}>
      <h3 style={styles.title}>Instant Dive into Your Performance Metrics</h3>
      <div style={{ display: "flex", marginBottom: 20 }}>
        <span className="tab" style={styles.tab}>
          Lifetime
        </span>
        <span className="tab" style={styles.tab}>
          Last Week
        </span>
        <span className="tab" style={styles.tab}>
          Last Month
        </span>
        <span className="tab" style={styles.tab}>
          Last Year
        </span>
        <div style={styles.tab} className="tab">
          <span>Customise Your Timeline</span>
          <img src={calendar} width="14" height="14" />
        </div>
      </div>
      <div
        style={styles.rootContainer}
      >
        <div style={styles.titleContainer}>
          <div style={styles.orderContainer}>
            <span style={styles.order}>Shipment Updates</span>
            <span style={styles.total}>Total Orders : 394</span>
          </div>
          <div style={styles.deliveredContainer}>
            <span
              style={{ ...styles.status, backgroundColor: colors.yellow100 }}
            >
              Delivered
            </span>

            <span style={styles.status}>Out for delivery</span>
            <span style={styles.status}>In-transit</span>
            <span style={styles.status}>Pending</span>
          </div>
          <Chart />
        </div>
        <div
          style={{
            backgroundColor: colors.orange,
            color: colors.white,
            width: "10vw",
            // height: "40vh",
            padding: 20,
            borderRadius: 15,
            paddingRight: 40,
          }}
        >
          <span style={styles.starFacts}>Star Facts about your orders!!!</span>
          <p style={styles.starFactsSubtitle}>
            <p>
              There are 8 shipments that have been in out for delivery for more
              than 3 days.
            </p>
            <p>There are 5 shipments in exception right now</p>
            <p>The maximum chargebacks are from Miami.</p>
          </p>
          <Button title="Check Orders Page" mode={"light"} />
        </div>
        <div style={styles.trackingContainer}>
          <span style={styles.trackingTitle}>
            Tracking Page Views Vs Orders
          </span>
          <p style={styles.trackingSubtitle}>
            Understand user engagement patterns and optimize your tracking page
            for enhanced customer experiences.
          </p>
          <div style={styles.trackingOrderContainer}>
            <span style={styles.trackingOrderTitle}>Orders</span>
            <div style={styles.trackingOrderAmtContainer}>
              <span style={styles.trackingOrderAmt}>80</span>
              <img src={save} height={"36"} width={"36"} />
            </div>
          </div>
          <div style={styles.trackingOrderContainer2}>
            <span style={styles.trackingOrderTitle}>Tracking Page Views</span>
            <div style={styles.trackingOrderAmtContainer}>
              <span style={styles.trackingOrderAmt}>44</span>
              <img src={eye} height={"36"} width={"45"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
