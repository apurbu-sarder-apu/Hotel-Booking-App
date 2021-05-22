import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
    return (
        <div>
            <Navbar dark color="dark" expand="lg">
                <div className="container">
                    <NavbarToggler onClick={this.navToggle}/>
                    <NavbarBrand href="/" ><h1 style={{color:'yellow'}}>Zabeer Hotel International</h1></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/accomodation" className="nav-link active"><h5 style={{color:'white'}}>Home</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/" className="nav-link active"><h5 style={{color:'white'}}>Accomodation</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/rooms" className="nav-link active"><h5 style={{color:'white'}}>Rooms</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link active"><h5 style={{color:'white'}}>About</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link active"><h5 style={{color:'white'}}>Contact</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/login" className="nav-link active"><h5 style={{color:'powderblue', paddingLeft:'2px'}}>Login</h5></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/dashboard" className="nav-link active"><h5 style={{color:'powderblue', paddingLeft:'1px'}}>Log Out</h5></Link>
                        </NavItem>
                    </Nav>
                    </Collapse>

                </div>
                {/* <NavbarBrand href="/">Momentwala</NavbarBrand> */}
            </Navbar>
        </div>
    );
    }

}

