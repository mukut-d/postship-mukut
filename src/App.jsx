import Header from "./components/Header/Header";
import "./App.css";
import { styles } from "./styles";
import ExploreOrders from "./components/Explore/ExploreOrders";
import Metrics from "./components/Metrics/Metrics";
import Functionality from "./components/Functionality/Functionality";

const App = () => {
  return (
    <>
      <Header />
      <div style={styles.root}>
        <ExploreOrders />
        <Metrics />
        <Functionality />
      </div>
    </>
  );
};

export default App;
