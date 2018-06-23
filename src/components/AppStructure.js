// Include React
import React, {Component} from "react";
import {Link} from "react-router-dom";

// Include jQuery
import $ from 'jquery/dist/jquery.js';

// Include Materialize css/js
import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// Include app css
import './App.css';

class Header extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $(".button-collapse").sideNav();
        });
    }

    render() {
        return <header>
            <nav>
                <a href="#!" data-activates="slide-out" className="button-collapse hide-on-large-only">
                    <i className="material-icons">menu</i>
                </a>
                <div className={"nav-wrapper blue-grey darken-4"}>
                    <Link className={"brand-logo"} to={"/"}>
                        EduTools
                    </Link>
                </div>
            </nav>
            <ul id="slide-out" className="side-nav fixed">
                <li><Link to={"/"}><i className={"material-icons"}>home</i> Startseite</Link></li>
                <li>
                    <div className={"divider"}></div>
                </li>
                <li>
                    <a className={"subheader"}>
                        Mathematik
                    </a>
                </li>
                <li>
                    <Link to={"/ruleofthree"}>Dreisatz</Link>
                </li>
                <li>
                    <Link to={"/dice"}>Würfelsimulation</Link>
                </li>
                <li>
                    <a className={"subheader"}>
                        Chemie
                    </a>
                </li>
                <li>
                    <Link to={"/periodictable"}>Periodensystem der Elemente</Link>
                </li>
            </ul>

        </header>;
    }
}

class Footer extends Component {
    render() {
        return <footer className="page-footer blue-grey">
            <div className="footer-copyright">
                <div className="container">
                    © 2018 by Jonathan Weth
                    <a className="grey-text text-lighten-4 right"
                       href="mailto:hansegucker@gmail.com">hansegucker@gmail.com</a>
                </div>
            </div>
        </footer>;
    }
}

export {Header};
export {Footer};
