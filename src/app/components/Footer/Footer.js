import styles from "./footer.module.css"
import Image from "next/image";
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLeftDiv}>
                <div className={styles.firstHalf}>
                    <div className={styles.logo}>
                        <Image src="./logo.svg" alt="Logo" width={40} height={40}/>
                        <span className={styles.logoText}>Travlog</span>
                    </div>
                    <span className={styles.slogan}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</span>
                </div>
                <div className={styles.secondHalf}>
                    <Image src="./social-media/facebook.svg" alt="Facebook" width={32} height={32}/>
                    <Image src="./social-media/twitter.svg" alt="Twitter" width={32} height={32} className={styles.icon}/>
                    <Image src="./social-media/insta.svg" alt="Insta" width={30} height={32} className={styles.icon}/>
                </div>
            </div>
            <div className={styles.footerRightDiv}>
                <div className={styles.footerNav1}>
                    <span className={`${styles.navHeadingStyle} ${styles.navLayout1}`}>Company</span>
                    <span className={`${styles.navlinkStyle} ${styles.navlinkLayout1}`}>About</span>
                    <span className={`${styles.navlinkStyle} ${styles.navlinkLayout2}`}>Career</span>
                    <span className={`${styles.navlinkStyle} ${styles.navlinkLayout3}`}>Mobile</span>
                </div>
                <div className={styles.footerNav2}>
                    <span className={`${styles.navHeadingStyle} ${styles.navLayout2}`}>Contact</span>
                    <span className={`${styles.navlinkStyle} ${styles.navlinkLayout1}`}>Why Travlog?</span>
                    <span className={`${styles.navlinkStyle} ${styles.navlinkLayout2}`}>Partner with us</span>
                    <span className={`${styles.navlinkStyle} ${styles.navlinkLayout3}`}>FAQ’s</span>
                    <span className={`${styles.navlinkStyle} ${styles.navlinkLayout4}`}>Blog</span>
                </div>
                <div className={styles.footerNav3}>
                    <span className={`${styles.navHeadingStyle} ${styles.navLayout3}`}>Meet Us</span>
                    <span className={`${styles.navlinkStyle} ${styles.navlinkLayout1}`}>+00 92 1234 56789</span>
                    <span className={`${styles.navlinkStyle} ${styles.navlinkLayout2}`}>info@travlog.com</span>
                    <span className={styles.finalNavLink}>
                        <span className={`${styles.navlinkStyle} ${styles.finalNavLinkLayout1}`}>205. R Street, New York</span>
                        <span className={`${styles.navlinkStyle} ${styles.finalNavLinkLayout2}`}>BD23200</span>
                        <span></span>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Footer;