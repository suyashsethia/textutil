import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.dropdown_head}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">{props.dropdown_1}</a></li>
                                    <li><a className="dropdown-item" href="/">{props.dropdown_2}</a></li>
                                    <li><a className="dropdown-item" href="/">{props.dropdown_3}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.propTypes = 
{
     title: PropTypes.string 
};

Navbar.defaultProps = {
    title: 'set title here ',
    dropdown_head:"dropdown_head",
    dropdown_1:"dropdown_1",
    dropdown_2:"dropdown_2",
    dropdown_3:"dropdown_3"

};