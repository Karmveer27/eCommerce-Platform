import { Navbar, Nav, Container} from 'react-bootstrap'
import { FaShoppingCart, FaUser} from 'react-icons/fa'

function Header() {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>  {/* collapseOnSelect enabled means when a user selects an option, it closes the navbar. The expand sets the breakpoint for collapse/not collapsed */}
    
            <Container>
                <Navbar.Brand href="#"> MarketBreeze </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto">

                        <Nav.Link href='/cart'>
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                        
                        <Nav.Link href='/login'>
                           <FaUser /> Login
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>


            </Container>
            
        </Navbar>
    </header>
  )
}

export default Header
