import { styles } from "./styles";

const Button = ({ title, mode = "dark" }) => {
  console.log(mode);
  return (
    <button style={mode == "dark" ? styles.dark : styles.light}>{title}</button>
  );
};

export default Button;
