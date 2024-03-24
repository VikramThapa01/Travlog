import {authContainer,loginBtn,loginTxt,signupBtn,signupTxt} from "./Auth.module.css"
const AuthButton = () => {
  return (
    <>
        <div className={authContainer}>
            <button className={loginBtn}>
                <span className={loginTxt}>
                    Log in
                </span>
            </button>
            <button className={signupBtn}>
                <span className={signupTxt}>
                    Sign Up
                </span>
            </button>
        </div>
    </>
  )
}

export default AuthButton