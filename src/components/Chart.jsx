import { ChartsLegend, PieChart } from "@mui/x-charts";
import { colors } from "../constants/colors";
import { styles } from "./styles";

const data = [
  { id: 0, value: 10, label: "Pending", color: colors.orange200 },
  { id: 1, value: 20, label: "In-transit", color: colors.orange },
  { id: 2, value: 30, label: "Exception", color: colors.orange400 },
  { id: 3, value: 40, label: "Out for delivery", color: colors.yellow300 },
  { id: 4, value: 40, label: "Delivered", color: colors.orange100 },
];

const Chart = () => {
  return (
    <div style={styles.chart}>
      <PieChart
        series={[
          {
            data: data,
            innerRadius: 30,
            outerRadius: 85,
          },
        ]}
        width={400}
        height={250}
      />
    </div>
  );
};

export default Chart;
