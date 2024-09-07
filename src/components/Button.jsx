import { styles } from "./styles";

const Button = ({ className = null, title, mode = "dark", style }) => {
  console.log(mode);
  return (
    <button
      className={className}
      style={
        mode == "dark"
          ? { ...styles.dark, ...style }
          : { ...styles.light, ...style }
      }
    >
      {title}
    </button>
  );
};

export default Button;
