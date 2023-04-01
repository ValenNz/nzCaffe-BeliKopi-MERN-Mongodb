import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            BELIKOPI. tersedian di 
          </h2>
          <p className={styles.text}>
            GRAB , GOJEK , SHOPEE FOOD
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR OUTLET</h1>
          <p className={styles.text}>
            Jl. Raya Babat No.96
            <br />Babat, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            Jl. Raya Babat No.96
            <br />Babat, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            Jl. Raya Babat No.96
            <br />Babat, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            Jl. Raya Babat No.96
            <br />Babat, 85022
            <br /> (602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            EVERY DAY
            <br /> 09:00 – 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;