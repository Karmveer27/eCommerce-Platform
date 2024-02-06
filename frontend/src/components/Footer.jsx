import { Container, Row, Col} from 'react-bootstrap'

function Footer() {
    const currentTime = new Date().getFullYear();
    // <Col className='text-center py-3 fixed-bottom'></Col> fixed bottom if u want it there always
  return (
    <footer>

        <Container>
            
            <Row>
                <Col className='text-center py-3'>
                    <p>Market Breeze &copy; {currentTime} | <span style={{fontWeight: 'bold'}}>Website still in development, updates coming soon!</span></p>
                </Col>
            </Row>

        </Container>
    
    </footer>
  )
}

export default Footer
