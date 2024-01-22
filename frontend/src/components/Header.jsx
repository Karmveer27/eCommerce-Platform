import { Navbar, Nav, Container} from 'react-bootstrap'
import { FaShoppingCart, FaUser} from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>  {/* collapseOnSelect enabled means when a user selects an option, it closes the navbar. The expand sets the breakpoint for collapse/not collapsed */}
    
            <Container>

                <LinkContainer to="/">
                    <Navbar.Brand> MarketBreeze </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto">

                        <LinkContainer to="/cart">
                            <Nav.Link >
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <Nav.Link >
                                <FaUser /> Login
                            </Nav.Link>
                        </LinkContainer>
                        
                        
                        
                    </Nav>
                </Navbar.Collapse>


            </Container>
            
        </Navbar>
    </header>
  )
}

export default Header
