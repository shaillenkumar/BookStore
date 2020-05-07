import React, { Component } from 'react';
import { Container,Nav,Form, FormControl,Button,Navbar, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BookStore from "./BookStore";

import {Link } from "react-router-dom";

export default class Home extends Component {
    state = { genre: [] };

    componentDidMount(){
        fetch('http://localhost:4000/api/listGenre')
            .then(resp=> resp.json())
            .then(data=> this.setState({genre:data}));
            console.log("-",this.state.genre)
    }

    render() {
       const displayName = ["Science And Fiction", "Children","Mystery and Novel", "Classical"];
//     const genre = ["Fiction", "Children","Novel", "Classical"];
        
        return (
            <div>
                <Container>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">My BookStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href='/add'>Add</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    </Navbar>
                    <BookStore sections = {this.state.genre} genre={this.state.genre}/>
                </Container> 
            </div>
        )
    }
}
