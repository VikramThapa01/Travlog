import styles from "./third.module.css"
import Image from "next/image";
const Third = () => {
    return (
        <>

            <div className={styles.servicesDiv}>
                <span className={styles.servicesTxt}>Services</span>
                <span className={styles.topCategory}>Our top value categories for you</span>
            </div>
            <div className={styles.servicesCards}>
                <div className={styles.cards}>
                    <Image src="/destination.png" alt="Destination" width={64} height={64}/>
                    <div className={styles.cardDiv}>
                        <span className={styles.cardTxt}>Best Tour Guide</span>
                        <span className={styles.cardDesc}>What looked like a small patch of purple grass, above five feet.</span>
                    </div>
                </div>
                <div className={`${styles.cards} ${styles.cardShadow}`}>
                    <Image src="/easybooking.png" alt="Destination" width={64} height={64}/>
                    <div className={styles.cardDiv}>
                        <span className={styles.cardTxt}>Easy Booking</span>
                        <span className={styles.cardDesc}>Square, was moving across the sand in their direction.</span>
                    </div>
                </div>
                <div className={`${styles.cards} ${styles.cardShadow}`}>
                    <Image src="/cloudy.png" alt="Destination" width={64} height={64}/>
                    <div className={styles.cardDiv}>
                        <span className={styles.cardTxt}>Weather Forecast</span>
                        <span className={styles.cardDesc}>What looked like a small patch of purple grass, above five feet.</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Third;