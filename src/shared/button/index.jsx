/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
import styles from "./styles.module.scss";

const Button = (props) => {
  const { text, onClick, type } = props;

  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
