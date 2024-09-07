import { colors } from "../../constants/colors";
import Card from "../Card/Card";
import { styles } from "./styles";
import danger from "../../assets/images/warning.png";
import info from "../../assets/images/info.png"

const ExploreOrders = () => {
  return (
    <>
      <span style={styles.title}>Welcome, John Mathew!!</span>
      <div
        style={styles.cardContainer}
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
    </>
  );
};

export default ExploreOrders;
