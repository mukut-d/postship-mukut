import { colors } from "./constants/colors";

const App = () => {
  return (
    <>
      <div
        className="header"
        style={{
          backgroundColor: "#ccc",
          flexDirection: "row",
          display: "flex",
          borderBottomWidth: 1,
          borderBottomColor: colors.black,
          padding: 10,
          margin: 10,
        }}
      >
        <span>Home</span>
        <span>Orders</span>
        <span>Integrations</span>
        <div>
          <span>Tracking Page</span>

          {/* <img src={images.arrow} className="arrow" /> */}
        </div>
        <span style={{ display: "flex", flex: "1" }}>Partner with Us</span>
        <div>
          <span>Search</span>
        </div>
        <div>
          <span>Account</span>
        </div>
        <div>
          <span>Settings</span>
        </div>
      </div>
      <div>
        <span>hii</span>
      </div>
    </>
  );
};

export default App;
