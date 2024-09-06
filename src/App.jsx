import Header from "./components/Header/Header";
import { colors } from "./constants/colors";
import "./App.css";
import { styles } from "./styles";
import Card from "./components/Card/Card";
import calendar from "../src/assets/images/calendar.png";
import save from "../src/assets/images/tray.png";
import eye from "../src/assets/images/eye.png";
import danger from "../src/assets/images/warning.png";
import info from "../src/assets/images/info.png";
import Button from "./components/Button";

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
          <Card
            backgroundColor={colors.yellow100}
            Icon={danger}
            title="Customize Customer Notification"
            subtitle="Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers"
            buttonText2="Configure Notifications"
          />
          <Card
            backgroundColor={colors.blue100}
            Icon={info}
            title="Your Tracking Link has been generated"
            subtitle="Include the Link to Your Store's Navigation Menu."
            buttonText2="Go To Navigation Menu"
            buttonText1="Copy Link"
          />
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
              display: "flex",
              gap: 10,
            }}
          >
            <div
              style={{
                backgroundColor: colors.white,
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: 20,
                borderRadius: 15,
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
                // height: "40vh",
                padding: 20,
                borderRadius: 15,
                paddingRight: 40,
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
              <Button title="Check Orders Page" mode={"light"} />
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
        <div
          style={{
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 30,
            backgroundColor: colors.orangeLight,
          }}
        >
          <span style={{ fontSize: 24, color: colors.black }}>
            Discover the Heart of Our Functionality
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              marginTop: 20,
            }}
          >
            <div
              style={{
                width: "25vw",
                //  backgroundColor: "#ccc",
                padding: 20,
                borderRadius: 10,
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <span style={{ fontSize: 14, color: colors.black }}>
                Elevate Your Brand Aesthetics with Custom Tracking Page Styles
              </span>
              <p style={{ fontSize: 13, color: colors.black }}>
                Immerse your customers in a branded experience by personalizing
                the colors on your tracking page.
              </p>
              <div style={{ marginTop: 20 }}>
                <span>Accent Color</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    marginTop: 10,
                  }}
                >
                  <input
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      borderStyle: "solid",
                      borderWidth: 0.6,
                      borderColor: colors.grey,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: colors.red200,
                      width: 60,
                      height: 30,
                      borderRadius: 10,
                    }}
                  ></div>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <span>Text Color</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    marginTop: 10,
                  }}
                >
                  <input
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      borderStyle: "solid",
                      borderWidth: 0.6,
                      borderColor: colors.grey,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: colors.red300,
                      width: 60,
                      height: 30,
                      borderRadius: 10,
                    }}
                  ></div>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <span>Background Color</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    marginTop: 10,
                  }}
                >
                  <input
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      borderStyle: "solid",
                      borderWidth: 0.6,
                      borderColor: colors.grey,
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: colors.red100,
                      width: 60,
                      height: 30,
                      borderRadius: 10,
                    }}
                  ></div>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button title={"Preview"} mode="light" />
                <Button title={"Apply Colors"} />
              </div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>
              <span>card 2</span>
            </div>
            <div style={{ width: "30vw", backgroundColor: "#ccc" }}>
              <span>card 3</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
