import Image from "next/image"
import Style from "./Logo.module.css"
const Logo = () => {
  return (
    <>
        <div className={Style.logoContainer}>
            <div>
                <Image
                    src="/logo.svg"
                    width={40}
                    height={40}
                    alt="Logo"
                />
            </div>
            <div className={Style.logoText}>
                TravLog
            </div>
        </div>
    </>
  )
}

export default Logo