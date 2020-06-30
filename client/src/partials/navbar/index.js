import React from "react";
import "./style.css";
import SettingsMenu from '../settingsMenu'
import { Link } from 'react-router-dom'

function Navbar() {

    const navStyle = {
        color: "white"
    }

    return (
        <div id="navbar">
            <ul id="navbar-list">
                <Link style={navStyle} to="/">
                    <li id="title">Adventure Game Books Online</li>
                </Link>
                <Link style = {navStyle} to="/about">
                    <li id="about">About</li>
                </Link>
                <li><SettingsMenu></SettingsMenu></li>
            </ul>
        </div>
    );
}
export default Navbar;