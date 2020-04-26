// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer id="footer">
    <div className="wrapper">

      <div className="credits">
        <p>&copy; {(new Date().getFullYear())} justin rousseau & associates.</p>
      </div>

    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
