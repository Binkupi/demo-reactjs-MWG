import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Menuli } from './Menuli';
import SidebarShortCuts from './SidebarShortCuts';

export class TopMenu extends Component {
    static displayName = TopMenu.name;

    changeMenu = () => {
        this.props.changeMenu();
    }
    
    render() {
        return (
            <div id="sidebar" className="sidebar h-sidebar navbar-collapse collapse ace-save-state">
                <SidebarShortCuts changeMenu={this.changeMenu} />
                <ul className="nav nav-list">
                    <Menuli classtagli="active open hover" classtaga="text-dark" classtagi="menu-icon fa fa-home" href="/"> Trang chủ</Menuli>
                    
                    <NavItem className="hover">
                        <NavLink tag={Link} className="text-dark" to="/dashboard"><i className="menu-icon fa fa-tachometer" /> 
                            <span className="menu-text"> Dashboard</span>
                        </NavLink>
                        <b className="arrow" />
                    </NavItem>
                    <NavItem className="hover">
                        <NavLink tag={Link} className="dropdown-toggle" to="#">
                            <i className="menu-icon fa fa-list"></i>
                            <span className="menu-text"> MainGroup</span>
                            <b className="arrow fa fa-angle-down"></b>
                        </NavLink>
                        <b className="arrow"></b>
                        <ul className="submenu">
                            <NavItem className="hover">
                                <NavLink tag={Link} className="text-dark" to="#">
                                    <i className="menu-icon fa fa-tachometer" />
                                    <span className="menu-text"> SubGroup</span>
                                </NavLink>
                                <b className="arrow" />
                            </NavItem>
                            <NavItem className="hover">
                                <NavLink tag={Link} className="text-dark" to="#">
                                    <i className="menu-icon fa fa-tachometer" />
                                    <span className="menu-text"> Product</span>
                                </NavLink>
                                <b className="arrow" />
                            </NavItem>
                        </ul>
                    </NavItem>
                </ul>
                <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
                    <i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right" />
                </div>
            </div>
        )
    }
}