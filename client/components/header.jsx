import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: true
          };
          this.toggleNavbar = this.toggleNavbar.bind(this);        
      }
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
      render() {
        return (
          <header className="col">
            <Navbar color="danger" light>
              <NavbarBrand href="/" className="text-white mr-auto">Moore Properties</NavbarBrand>
            </Navbar>
          </header>
        );
      }
    }
