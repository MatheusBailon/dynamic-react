import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header( props ){
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>{ props.text }</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav>
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Wine</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Sign in</Nav.Link>
                        <Nav.Link href="#">Sign out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}