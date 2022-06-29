/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
import styles from "./styles.module.scss";

const Input = (props) => {
  const { text, onClick, value, width = true, type } = props;
  return (
    <>
      <label class={styles.input}>
        <input
          onClick={onClick}
          value={value}
          className={
            width ? styles.input__field : styles["input__field--width"]
          }
          type={type}
          placeholder=" "
        />
        <span class={styles.input__label}>{text}</span>
      </label>
    </>
  );
};

export default Input;
