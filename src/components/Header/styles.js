import { colors } from "../../constants/colors";

export const styles = {
  root: {
    backgroundColor: "#ccc",
    backgroundColor: "white",
    flexDirection: "row",
    display: "flex",
    borderBottomWidth: "1px",
    borderBottomColor: colors.grey,
    borderBottomStyle: "solid",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  navContainer: {
    flexDirection: "column",
    justifyContent: "center ",
    alignItems: "center",
  },
  navTitle: {
    fontFamily: "Inter600",
    fontSize: 14,
    color: colors.black,
    paddingLeft: 10,
    paddingRight: 10,
    borderStyle: "none",
  },
  line: {
    marginLeft: 10,
    marginTop: 2,
    height: 1.5,
    width: 30,
    backgroundColor: colors.purple,
  },
  search: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    paddingBottom: 5,
    marginRight: 15,
  },
};
