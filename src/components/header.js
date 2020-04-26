import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import image from "../images/logo-1.png"

const Header = ({ siteTitle }) => (
  <header>
    <div class="wrapper">
      <a href="#main" className="hidden">Skip to Main</a>
      <a href="#footer" className="hidden">Skip to Footer</a>
      <h1>JR&Associates</h1>
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
