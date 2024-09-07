import { colors } from "./constants/colors";

export const styles = {
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.black100,
    marginBottom: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  tab1: {
    padding: 10,
    backgroundColor: colors.white,
    marginRight: 5,
    borderRadius: 10,
    fontFamily: "Inter600",
    fontSize: 13,
    color: colors.black,
  },
  tab: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    fontFamily: "Inter600",
    fontSize: 13,
    color: colors.black,
  },
};
