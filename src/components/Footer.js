import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Volusion, LLC. Design: <a href="https://html5up.net">HTML5 UP</a> and <a href="https://www.gatsbyjs.org/starters/codebushi/gatsby-starter-dimension">Dimension Starter</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
