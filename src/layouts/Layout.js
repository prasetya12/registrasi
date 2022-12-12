import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
    let navigate = useNavigate();
    return (
        <>
            <Navbar key='xl' bg="light" expand='xl' className="mb-3 ">
                <Container className='pl-8 pr-8' >
                    <Navbar.Brand href="#">Team 3</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-xl}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                                <Nav.Link onClick={() => { navigate('/registrasi') }}>Registrasi</Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <main className='container'>
                {children}
            </main>

        </>
    )
}

export default Layout