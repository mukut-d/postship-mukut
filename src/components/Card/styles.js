import { colors } from "../../constants/colors";

export const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.white,
    width: "25vw",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    borderRadius: 10,
    // borderWidth: 1,
    // borderStyle: "solid",
    marginRight: 7.5,
    marginLeft: 7.5,
    boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
  },
  title: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingLeft: 10,
    fontFamily: "Inter600",
    fontSize: 14,
    color: colors.black,
  },
  subtitle: {
    fontFamily: "Inter400",
    fontSize: 13,
    color: colors.black,
    paddingLeft: 10,
  },
  btnContainer: {
    display: "flex",
    marginTop: 15,

    paddingLeft: 10,
    // backgroundColor: "#ccc",
  },
};
