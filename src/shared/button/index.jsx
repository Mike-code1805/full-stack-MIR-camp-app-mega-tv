/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
import styles from "./styles.module.scss";

const Button = (props) => {
  const { text, onClick, type, width = true } = props;

  return (
    <button onClick={onClick} type={type} className={
      width ? styles.button : styles["button--width"]
      }>
      {text}
    </button>
  );
};

export default Button;
