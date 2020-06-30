import React, { Component } from "react";
import "./style.css";

class SettingsMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
        }

        this.changeDisplayed = this.changeDisplayed.bind(this);
    }

    changeDisplayed() {
        if (this.state.collapsed) {
            this.setState({ collapsed: false });
        } else {
            this.setState({ collapsed: true });
        }
    }

    render() {
        return (
            <div id="settings-menu-container">
                <button id="menu-button" onClick={this.changeDisplayed}>
                    <img src={require('./icon.png')} alt="Settings button"/>
                </button>
                {
                    this.state.collapsed
                        ? (
                            null
                        )
                        : (
                            <div id="menu">
                                <button>Placeholder 1</button>
                                <button>2</button>
                                <button>Placeholder 3 Placeholder 3</button>
                            </div>
                        )
                }
            </div>
        );
    }
}
export default SettingsMenu;