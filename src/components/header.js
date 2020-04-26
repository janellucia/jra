import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import image from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div class="wrapper">
      <a href="#main" className="hidden">Skip to Main</a>
      <a href="#footer" className="hidden">Skip to Footer</a>
      <img src={image} class="logo" alt="logo" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
