import React, { Component } from 'react';

import { Header } from './Header/Header';
import { LeftMenu } from './Menu/LeftMenu';
import { TopMenu } from './Menu/TopMenu';
import { Footer } from './Footer/Footer';

import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import ScriptTag from 'react-script-tag';


export class Layout extends Component {
  static displayName = Layout.name;

  /* state */
  constructor(props) {
    super(props);
    this.state = {
      ismenutop: false
    }
  }

  initMenu = () => {
    if (this.state.ismenutop === true) {
      return <TopMenu changeMenu={this.changeMenu} />
    } else {
      //console.log("1LeftMenu");
      return <> <LeftMenu changeMenu={this.changeMenu} />
        <ScriptTag type="text/javascript" src="/assets/js/ace.min.js" /></>
    }
  }

  changeMenu = () => {
    console.log("aa");
    this.setState({ ismenutop: !this.state.ismenutop });
  }

  render() {
    return (
      <>
        <Header />
        <div className="main-container ace-save-state" id="main-container">
          {/* <a className="btn btn-sm btn-info" onClick={() => this.changeMenu()}>Đổi</a> */}
          {this.initMenu()}
          <div className="main-content">
            <div className="main-content-inner">
              <div className="breadcrumbs ace-save-state" id="breadcrumbs">
                <ul className="breadcrumb">
                  <li>
                    <i className="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                  </li>
                  <li className="active">Dashboard</li>
                </ul>

                <div className="nav-search" id="nav-search">
                  <form className="form-search">
                    <span className="input-icon">
                      <input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" autoComplete="off"></input>
                      <i className="ace-icon fa fa-search nav-search-icon"></i>
                    </span>
                  </form>
                </div>
              </div>

              <div className="page-content">
                {this.props.children}
              </div>
            </div>
          </div>
          <Footer />
          <NavLink id="btn-scroll-up" tag={Link} className="btn-scroll-up btn btn-sm btn-inverse display" to="#">
            <i className="ace-icon fa fa-angle-double-up icon-only bigger-110" />
          </NavLink>
          <a href="#" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse display">
            <i className="ace-icon fa fa-angle-double-up icon-only bigger-110" />
          </a>
        </div>
      </>
    );
  }
}
