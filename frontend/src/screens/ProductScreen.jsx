import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products';
import Rating from '../components/Rating';
import { Row, Col , Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function ProductScreen() {
const { id:productID } = useParams();
const product = products.find((product) => (product._id === productID));
console.log(product)
  return (
    <>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        <Row>
            {/* Three cols, one for Image, details, availability */}
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>

            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {product.description}
                    </ListGroup.Item>

                 </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>

                                <Col>
                                    ${product.price}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status: 
                                </Col>

                                <Col>
                                    {product.countInStock === 0 ? 'Out Of Stock' : "In Stock"}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled = {product.countInStock === 0} >
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    
                    </ListGroup>
                </Card>
            </Col>

        </Row>

        

    </>
  )
}

export default ProductScreen
