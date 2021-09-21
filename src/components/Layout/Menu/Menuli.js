import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Menuli extends Component {
    static displayName = Menuli.name;

    render() {
        return (
            <NavItem className={this.props.classtagli}>
                <MenuTagA classtaga={this.props.classtaga} classtagi={this.props.classtagi} href={this.props.href} > {this.props.children}</MenuTagA>
            </NavItem>
        );
    }
}

export class MenuTagA extends Component {
    static displayName = MenuTagA.name;
    menu_dropdown = (className) => {
        if (className === "dropdown-toggle") {
            return (
                <>
                    <i className={this.props.classtagi}></i>
                    <span className="menu-text"> {this.props.children}</span>
                    <b className="arrow fa fa-angle-down"></b>
                </>
            );
        }
        else {
            return <><i className={this.props.classtagi} /><span className="menu-text">{this.props.children} </span></>;
        }
    }

    render() {
        return (
            <>
                <NavLink tag={Link} className={this.props.classtaga} to={this.props.href}>
                    {this.menu_dropdown(this.props.classtaga)}
                </NavLink>
                <b className="arrow" />
            </>
        );
    }
}

