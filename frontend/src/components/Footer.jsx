import { Container, Row, Col} from 'react-bootstrap'

function Footer() {
    const currentTime = new Date().getFullYear();
  return (
    <footer>

        <Container>
            
            <Row>
                <Col className='text-center py-3'>
                    <p>Market Breeze &copy; {currentTime}</p>
                </Col>
            </Row>

        </Container>
    
    </footer>
  )
}

export default Footer
