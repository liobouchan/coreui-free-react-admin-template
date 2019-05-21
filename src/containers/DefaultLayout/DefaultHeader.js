import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />

        {/*Logo in NavBar*/}
        <AppNavbarBrand 
          // full={{ /*src: logo,*/ width: 89, height: 25, alt: 'CoreUI Logo' }}
          // minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        ><h1>AllGood</h1></AppNavbarBrand>

        {/*NavBar with Links*/}
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/regulacion" className="nav-link" >Regulación</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/obligaciones" className="nav-link">Obligaciones</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/controles" className="nav-link">Controles</NavLink>
          </NavItem>
        </Nav>

        {/*Second Part of NavBar*/}
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>

          {/*Profile Picture with DropDown Menu*/}
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'https://muliaasrijogja.com/wp-content/uploads/2018/01/2754579.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
