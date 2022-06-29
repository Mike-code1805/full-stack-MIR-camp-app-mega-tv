/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
import styles from "./styles.module.scss";

const Subtitle = (props) => {
  const { text } = props;

  return <h2 className={styles.subtitle}>{text}</h2>;
};

export default Subtitle;
