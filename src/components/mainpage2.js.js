import styles from "./mainpage2.module.css.css";
const Mainpage2 = () => {
  return (
    <div className={styles.wireframe2}>
      <div className={styles.wantToLearnContainer}>
        <span>{`Want to learn from the `}</span>
        <span className={styles.best}>best</span>
        <span>{` and become `}</span>
        <span className={styles.best}>one</span>
        <span>?</span>
      </div>
      <img
        className={styles.iphone11ProMax}
        alt=""
        src="/iphone-11-pro-max@2x.png"
      />
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.signUpNow}>SIGN UP NOW</div>
        <div className={styles.div}>{`>`}</div>
      </button>
    </div>
  );
};

export default Mainpage2;
