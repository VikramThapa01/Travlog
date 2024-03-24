import styles from "./first.module.css"
import Image from "next/image";
const First = () => {
    return (
        <>
            <div className={styles.leftSection}>
                <div className={styles.leftDiv}>
                    <button className={styles.explortBtn}>
                        <span className={styles.exploreSpan}>Explore the world!</span>
                        <Image
                            src="/explore.svg"
                            width={24}
                            height={24}
                            alt="Explore"
                        />
                    </button>
                    <span className={styles.destSpan}>Travel <span className={styles.topDestSpan}>top destination</span> of the world</span>
                    <span className={styles.reviewSpan}>We always make our customer happy by providing as many choices as possible</span>
                    <div className={styles.getStartedDiv}>
                        <button className={styles.getStartBtn}>
                            <label>Get Started</label>
                        </button>
                        <button className={styles.demoBtn}>
                            <Image
                                src="/demo.svg"
                                width={20}
                                height={20}
                                alt="Demo"
                            />
                            <label className={styles.demoTxt}>Watch Demo</label>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.worldMap}>
                    <Image src="/worldMap.svg" alt="Map" width={772} height={287}/>
                </div>

                <div className={styles.bestPlacePicture}>
                    <div className={styles.twoPictures}>
                        <Image src="/hero-image/hero-1.jpeg" alt="Image One" width={272} height={300}
                               className={styles.picDefault}/>
                        <Image src="/hero-image/hero-2.jpeg" alt="Image Two" width={272} height={300}
                               className={styles.picDefault}/>
                    </div>
                    <div>
                        <Image src="/hero-image/hero-3.jpeg" alt="Image Three" width={272} height={300}
                               className={styles.picDefault}/>
                    </div>
                </div>
                <button className={styles.locationBtn}>
                    <Image src="/location.svg" width={24} height={24} alt="Location"/>
                    <span className={styles.topPlaces}>Top Places</span>
                </button>
                <div className={styles.addUserDiv}>
                    <Image src="/adduser.svg" alt="Add User" width={32} height={32}/>
                </div>
                <div className={styles.sendDiv}>
                    <Image src="/send.svg" alt="Send" width={32} height={32}/>
                </div>

            </div>
        </>
    );
};

export default First;