import Header from "./components/Header/Header";
import { colors } from "./constants/colors";
import "./App.css";
import { styles } from "./styles";
import Card from "./components/Card/Card";
import calendar from "../src/assets/images/calendar.png";
import save from "../src/assets/images/tray.png";
import eye from "../src/assets/images/eye.png";

const App = () => {
  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: 50,
          paddingBottom: 50,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={styles.title}>Welcome, John Mathew!!</span>
        <div
          style={{
            display: "flex",
            paddingLeft: 50,
            paddingRight: 50,
            paddingBottom: 50,
          }}
        >
          <Card />
          <Card />
          <Card />
        </div>
        <div
          style={{
            backgroundColor: colors.yellow500,
            paddingLeft: 50,
            paddingRight: 50,
            paddingBottom: 40,
            paddingTop: 30,
          }}
        >
          <h3>Instant Dive into Your Performance Metrics</h3>
          <div style={{ display: "flex", marginBottom: 20 }}>
            <span
              className="tab"
              style={{
                padding: 10,
                backgroundColor: colors.white,
                marginRight: 5,
                borderRadius: 10,
              }}
            >
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
            style={{
              marginTop: 40,
              backgroundColor: "#ccc",
              display: "flex",
              gap: 10,
            }}
          >
            <div
              style={{
                backgroundColor: "red",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div style={{ display: "flex" }}>
                <span style={{ display: "flex", flex: 1 }}>
                  Shipment Updates
                </span>
                <span>Total Orders : 394</span>
              </div>
              <div>Chart content here</div>
            </div>
            <div
              style={{
                backgroundColor: colors.orange,
                color: colors.white,
                width: "10vw",
                height: "40vh",
                padding: 20,
                borderRadius: 15,
              }}
            >
              <span style={{ fontSize: 14 }}>
                Star Facts about your orders!!!
              </span>
              <p style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <p style={{ fontSize: 13 }}>
                  There are 8 shipments that have been in out for delivery for
                  more than 3 days.
                </p>
                <p style={{ fontSize: 13 }}>
                  There are 5 shipments in exception right now
                </p>
                <p style={{ fontSize: 13 }}>
                  The maximum chargebacks are from Miami.
                </p>
              </p>
              <button
                style={{
                  borderRadius: 5,
                  padding: 5,
                  alignSelf: "flex-end",
                  borderStyle: "none",
                }}
              >
                Check Orders Page
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                padding: 20,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}
            >
              <span style={{ fontSize: 14, color: colors.black }}>
                Tracking Page Views Vs Orders
              </span>
              <p style={{ fontSize: 13, color: colors.black }}>
                Understand user engagement patterns and optimize your tracking
                page for enhanced customer experiences.
              </p>
              <div
                style={{
                  backgroundColor: colors.yellow400,
                  borderRadius: 5,
                  padding: 20,
                  marginBottom: 10,
                  paddingRight: 40,
                }}
              >
                <span style={{ fontSize: 12 }}>Orders</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <span style={{ display: "flex", flex: 1, fontSize: 36 }}>
                    80
                  </span>
                  <img src={save} height={"36"} width={"36"} />
                </div>
              </div>
              <div
                style={{
                  backgroundColor: colors.orange100,
                  borderRadius: 5,
                  padding: 20,
                  marginTop: 10,
                  paddingRight: 40,
                }}
              >
                <span style={{ fontSize: 12 }}>Tracking Page Views</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <span style={{ display: "flex", flex: 1, fontSize: 36 }}>
                    44
                  </span>
                  <img src={eye} height={"36"} width={"45"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 30 }}>
          <h3>Discover the Heart of Our Functionality</h3>
          <div>
            <span>card 1</span>
          </div>
          <div>
            <span>card 2</span>
          </div>
          <div>
            <span>card 3</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
