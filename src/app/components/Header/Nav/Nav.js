import {navContainer, navAnchor, home,discovery,spdeal,contact } from "./Nav.module.css"
const Nav = () => {
  const PREV_JS = "javascript:void(0);"
  return (
      <>
          <nav className={navContainer}>
              <a href={PREV_JS} className={`${navAnchor} ${home}`}>Home</a>
              <a href={PREV_JS} className={`${navAnchor} ${discovery}`}>Discover</a>
              <a href={PREV_JS} className={`${navAnchor} ${spdeal}`}>Special Deals</a>
              <a href={PREV_JS} className={`${navAnchor} ${contact}`}>Contact</a>
          </nav>
      </>
  )
}
export default Nav