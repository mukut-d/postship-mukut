import { colors } from "../constants/colors";

export const styles = {
  dark: {
    borderRadius: 5,
    padding: 5,
    marginTop: 30,
    borderStyle: "none",
    fontSize: 12,
    backgroundColor: colors.black100,
    color: colors.white,
  },
  light: {
    borderRadius: 5,
    padding: 5,
    marginTop: 30,
    borderStyle: "none",
    borderColor: colors.grey,
    borderWidth: 0.5,
    fontSize: 12,
    backgroundColor: colors.white,
    color: colors.black,
    boxShadow: "0px 0.5px 0px 0.5px",
  },
};
