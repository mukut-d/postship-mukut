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
import paypal from "../src/assets/images/paypal.png";
import logo1 from "../src/assets/images/logo1.png";
import logo2 from "../src/assets/images/logo2.png";
import logo3 from "../src/assets/images/logo3.png";
import logo4 from "../src/assets/images/logo4.png";
import Button from "./components/Button";
import { PieChart } from "@mui/x-charts";
import Chart from "./components/Chart";

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
              style={styles.tab}
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
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span
                  style={{
                    fontSize: 13,
                    color: colors.black,
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: colors.yellow100,
                    padding: 10,
                  }}
                >
                  Delivered
                </span>

                <span
                  style={{
                    fontSize: 13,
                    color: colors.black,
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: colors.white200,
                    padding: 10,
                  }}
                >
                  Out for delivery
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: colors.black,
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: colors.white200,
                    padding: 10,
                  }}
                >
                  In-transit
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: colors.black,
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: colors.white200,
                    padding: 10,
                  }}
                >
                  Pending
                </span>
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
              <div
                style={{ marginTop: 20, gap: 10, display: "flex", padding: 10 }}
              >
                <Button title={"Preview"} mode="light" />
                <Button title={"Apply Colors"} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                paddingBottom: 20,
              }}
            >
              <div
                style={{
                  boxShadow: "2px 2px 2px 1px",
                  borderRadius: 15,
                  marginBottom: 20,
                  padding: 20,
                }}
              >
                <span style={{ fontSize: 14, color: colors.black }}>
                  Exclusive Onboarding Support for High-Volume Brands
                </span>
                <p style={{ fontSize: 13, color: colors.black }}>
                  Unlock personalized guidance! Book a one-on-one onboarding
                  call to streamline your experience.
                </p>
                <Button title={"Schedule A Call"} />
              </div>
              <div
                style={{
                  boxShadow: "2px 2px 2px 1px",
                  borderRadius: 15,
                  marginBottom: 20,
                  padding: 20,
                }}
              >
                <span style={{ fontSize: 14, color: colors.black }}>
                  Explore Our Integrated Ecosystem
                </span>
                <p style={{ fontSize: 13, color: colors.black }}>
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
            <div
              style={{
                width: "30vw",
                backgroundColor: "#ccc",
                paddingLeft: 20,
                paddingTop: 20,
              }}
            >
              <span>Seamlessly Integrate Custom HTML Elements</span>
              <p style={{ paddingRight: 40 }}>
                Unleash creativity with our Custom HTML feature. Add links,
                custom messages, or any HTML content to elevate the tracking
                page experience for your customers.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 20,
                  marginRight: 20,
                }}
              >
                <span style={{ paddingTop: 20, paddingBottom: 20 }}>
                  HTML Link
                </span>
                <input
                  type="text"
                  placeholder="Value"
                  style={{
                    height: "160px",
                    borderRadius: 10,
                    borderStyle: "solid",
                    borderWidth: 0.6,
                    borderColor: colors.grey,
                  }}
                />
              </div>
              <div style={{ marginTop: 20, gap: 10, display: "flex" }}>
                <Button title={"Preview"} mode="light" />
                <Button title={"Apply Colors"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
