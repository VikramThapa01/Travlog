import styles from "./fourth.module.css"
import Image from "next/image";
const Fourth = () => {
    return (
        <>
            <div className={styles.leftDiv}>
                <Image src="./ellipse-svg/ellipse1.svg" alt="Ellipse One" width={32} height={32}
                       className={styles.esvg1}/>
                <Image src="./ellipse-svg/ellipse2.svg" alt="Ellipse Two" width={16} height={16}
                       className={styles.esvg2}/>
                <Image src="./ellipse-svg/ellipse3.svg" alt="Ellipse Three" width={40} height={40}
                       className={styles.esvg3}/>
                <Image src="./ellipse-svg/ellipse4.svg" alt="Ellipse Four" width={40} height={40}
                       className={styles.esvg4}/>
                <Image src="./ellipse-svg/ellipse5.svg" alt="Ellipse Five" width={96} height={96}
                       className={styles.esvg5}/>
                <div className={styles.halfCircle}></div>
                <Image src="/packing.png" alt="Packing Image" width={696} height={696} className={styles.packingImg}/>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.travelPoints}>
                    <div className={styles.content1}>
                        <span className={styles.heading}>Travel Point</span>
                        <span className={styles.desc}>We helping you find your dream location</span>
                        <div className={styles.summaryDiv}>
                            <span className={styles.summaryTxt}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                            </span>
                        </div>
                    </div>
                    <spna className={styles.content2}></spna>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statsDiv}>
                        <div className={`${styles.statsContent} ${styles.statsContentFlex}`}>
                            <span className={styles.span1}>500+</span>
                            <span className={styles.span2}>Holiday Package</span>
                        </div>
                        <div className={`${styles.statsContent} ${styles.statsContentFlex}`}>
                            <span className={styles.span1}>100</span>
                            <span className={styles.span2}>Luxury Hotel</span>
                        </div>
                    </div>

                    <div className={styles.statsDiv}>
                        <div className={`${styles.statsContent} ${styles.statsContentFlex}`}>
                            <span className={styles.span1}>7</span>
                            <span className={styles.span2}>Premium Airlines</span>
                        </div>
                        <div className={`${styles.statsContent} ${styles.statsContentFlex}`}>
                            <span className={styles.span1}>2k+</span>
                            <span className={styles.span2}>Happy Customer</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Fourth;