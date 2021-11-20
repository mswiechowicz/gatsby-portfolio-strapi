import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={toggleSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? "social-links sidebar-icons" : null}>
          {socialLinks.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url} className="social-link">
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
