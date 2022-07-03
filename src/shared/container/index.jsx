/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
import Subtitle from "../subtitle/index.jsx";
import styles from "./styles.module.scss";

const Container = (props) => {
  const { price, plan, value, onClick } = props;
  return (
    <div className={styles.container}>
      <Subtitle text={plan} />
      <h1 className={styles.container__h1}>Service</h1>
      <img className={styles.container__img} src="icon.png" />
      <div className={styles.container__price}>
        <h1 className={styles.container__price__h1}>$</h1>
        <h2 className={styles.container__price__h2}>{price}</h2>
        <h3 className={styles.container__price__h3}>/mo</h3>
      </div>
      <div className={styles.container__radio}>
        <input className={styles.container__radio__width} onClick={onClick} value={value} name="radio" type="radio" />
      </div>
    </div>
  );
};

export default Container;
