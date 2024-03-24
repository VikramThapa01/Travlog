import styles from "./page.module.css"
import First from "@/app/components/Sections/First/First";
import Second from "@/app/components/Sections/Second/Second";
import Third from "@/app/components/Sections/Third/Third";
import Fourth from "@/app/components/Sections/Fourth/Fourth";
import Five from "@/app/components/Sections/Five/Five";
import Image from "next/image";
export default function Home() {
  return (
      <>
          <div className={styles.arrows}>
            <Image src="./arrow.svg" alt="Arrow" width={80} height={152}/>
          </div>
          <div className={styles.discountDiv}>
              <Image src="./percentage.svg" alt="Percentage" width={40} height={40}/>
              <span className={styles.discTxt}>Discounted Price</span>
          </div>
          <div className={styles.triangle}>
            <Image src="./triangle.svg" alt="Triangle" width={183.86} height={176.35}/>
          </div>
          <div className={styles.feedback}>
            <div className={styles.feedbackCricle}>
                <Image src="./star.svg" alt="Star" width={40} height={36}/>
            </div>
          </div>
          <div className={styles.sprialDesign}>
            <Image src="./sprial.svg" alt="Sprial" width={332} height={351.95}/>
          </div>
          <div className={styles.ellipseTop}></div>
          <div className={styles.ellipseMiddle}></div>
          <div className={styles.firstContainer}>
              <First/>
          </div>
          <div className={styles.secondContainer}>
              <Second/>
          </div>
          <div className={styles.thridContainer}>
              <Third/>
          </div>
          <div className={styles.fourthContainer}>
              <Fourth/>
          </div>
          <div className={styles.fiveContainer}>
              <Five/>
          </div>
      </>
  );
}
