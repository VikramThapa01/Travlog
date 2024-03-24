import Logo from "./Logo/Logo"
import Nav from "./Nav/Nav"
import AuthButton from "./Auth/AuthButton"
import {headerContainer} from "./Header.module.css"

const Header = () => {
  return (
    <>
        <div className={headerContainer}>
            <Logo/>
            <Nav/>
            <AuthButton/>
        </div>

    </>
  )
}

export default Header