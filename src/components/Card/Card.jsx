import { colors } from "../../constants/colors";
import "../index.css";

const Card = () => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.white,
        width: "25%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        borderRadius: 10,
        // borderWidth: 1,
        // borderStyle: "solid",
        marginRight: 7.5,
        marginLeft: 7.5,
      }}
    >
      <span style={{}}>
        <h3>Order Quota Pending</h3>
      </span>
      <span style={{ fontWeight: 450, fontSize: 13, color: colors.black }}>
        Your Order quota is about to end as 394/400 orders has been placed.
      </span>

      <div style={{ display: "flex", marginTop: 15, height: "25%" }}>
        <button
          className="card"
          style={{
            width: "30%",
            padding: 5,
            borderStyle: "none",
            borderRadius: 10,
            backgroundColor: colors.white,
            color: colors.black100,
            fontSize: 12,
            marginRight: 5,
          }}
        >
          Copy Link
        </button>
        <button
          style={{
            width: "50%",
            padding: 5,
            marginLeft: 5,
            borderRadius: 10,
            backgroundColor: colors.black100,
            color: colors.white,
            fontSize: 12,
          }}
        >
          Explore Your Orders
        </button>
      </div>
    </div>
  );
};

export default Card;
