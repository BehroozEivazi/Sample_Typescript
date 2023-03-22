import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import UserContext, { CurrentUserContextType } from "./context/UserContext";
type IProps = {
    currnetUser: CurrentUserContextType | null;
};

function Header() {
    let currentUser = useContext(UserContext);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    {currentUser ? null : (
                        <>
                            <div>
                                <Link to="login">Login</Link>
                            </div>
                            <div>
                                <Link to="signUp">signUp</Link>
                            </div>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
