import React from "react";
import PropTypes from "prop-types";
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <header>
                {this.props.title}
            </header>
        );
    }
}
Header.propTypes = {
    title:PropTypes.string.isRequired
};
export default Header;