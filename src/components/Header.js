import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-flask"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Element</h1>
                <p>Build the next generation of Volusion storefronts</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="https://github.com/volusion/element-tutorial">Element Tutorial</a></li>
                <li><a href="https://github.com/volusion/element-cli">Element CLI</a></li>
                <li><a href="https://github.com/volusion/element-BlockStarter">Element Block Starter</a></li>
                <li><a href="https://github.com/volusion/element-Components">Element Components</a></li>
                <li><a href="https://github.com/volusion/element-PropTypes">Element PropTypes</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
