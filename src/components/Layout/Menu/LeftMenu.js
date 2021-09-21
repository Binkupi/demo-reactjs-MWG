import React, {Component} from 'react';
import { NavItem } from 'reactstrap';

import { Menuli, MenuTagA } from './Menuli';
import SidebarShortCuts from './SidebarShortCuts';

export class LeftMenu extends Component{
    static displayName = LeftMenu.name;
    constructor(props){
        super(props);
        
        this.state = {
            isSub: true,
            id: 1,
            name: 'abc'
        }
    }
    
    changeMenu = () => {
        this.props.changeMenu();
    }

    render(){
        return(
            <div id="sidebar" className="sidebar responsive ace-save-state">
                <SidebarShortCuts changeMenu={this.changeMenu} />
                <ul className="nav nav-list">
                    <Menuli classtagli="active" classtaga="text-dark" classtagi="menu-icon fa fa-home" href="/"> Trang chủ</Menuli>
                    <Menuli classtaga="text-dark" classtagi="menu-icon fa fa-tachometer" href="/dashboard"> Dashboard</Menuli>
                    
                    <NavItem className="">
                        <MenuTagA classtaga="dropdown-toggle" href="#" classtagi="menu-icon fa fa-list">MainGroup</MenuTagA>
                        <ul className="submenu">
                            <Menuli classtagli="hover" classtaga="text-dark" classtagi="menu-icon fa fa-tachometer" href={`/subgroup/${this.state.id}`}> SubGroup</Menuli>
                            <Menuli classtagli="hover" classtaga="text-dark" classtagi="menu-icon fa fa-tachometer" href={`/subgroup/${this.state.id}/${this.state.name}`}> Product</Menuli>
                            <Menuli classtagli="hover" classtaga="text-dark" classtagi="menu-icon fa fa-tachometer" href="/subgroup/2/aaa"> Product</Menuli>
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