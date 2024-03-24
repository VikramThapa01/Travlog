import React from 'react';
import styles from './five.module.css'
import Image from "next/image";

const Five = () => {
    return (
        <>
            <div className={styles.fiveDiv}>
                <div className={styles.subscribeTxt}>
                    <span className={styles.text1}>subscribe to our newsletter</span>
                    <span className={styles.text2}>Prepare yourself & let’s explore the beauty of the world</span>
                </div>
                <div className={styles.subscribeInpDiv}>
                    <div className={styles.subscribeInpField}>
                        <Image src="/email.svg" alt="Email" width={26} height={24} className={styles.emailImg}/>
                        <input type="text" placeholder="Your Email" className={styles.inputField}/>
                    </div>
                    <button className={styles.subscribeBtnDiv}>
                        <span className={styles.btnLabel}>Subscribe</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Five;