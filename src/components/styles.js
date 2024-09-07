import { colors } from "../constants/colors";

export const styles = {
  dark: {
    borderRadius: 5,
    padding: 6,
    marginTop: 30,
    borderStyle: "none",
    fontSize: 12,
    backgroundColor: colors.black100,
    color: colors.white,
    fontFamily: "Inter500",
  },
  light: {
    borderRadius: 5,
    padding: 6,
    marginTop: 30,
    borderStyle: "none",
    borderColor: colors.grey,
    borderWidth: 0.5,
    fontSize: 12,
    backgroundColor: colors.white,
    color: colors.black,
    boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
    fontFamily: "Inter500",
    fontWeight: 550,
  },
  chart: { display: "flex", flex: 1 },
};
