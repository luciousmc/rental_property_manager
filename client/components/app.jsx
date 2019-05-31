import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class App extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
      render() {
        return (
          <div>
            <Navbar color="danger" light>
              <NavbarBrand href="/" className="text-white mr-auto">Moore Properties</NavbarBrand>
              <div className="text-white mr-4">Hello Howie!</div>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="./properties">Properties</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="./invoices">Invoices</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="./maintenance">Maintenance</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
    }