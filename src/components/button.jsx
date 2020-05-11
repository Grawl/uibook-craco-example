import React, { Component } from "react";
import './button.css'
class Button extends Component {
    render() {
        const { isSecondary } = this.props
        return (
            <button
                className={`button ${isSecondary ? 'is-secondary' : ''}`}
            >
                {this.props.children}
            </button>
        );
    }
}
export default Button
