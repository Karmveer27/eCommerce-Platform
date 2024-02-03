// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating';
import { Row, Col , Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../slices/productsApiSplice';


    function ProductScreen() {

        const {id:productID} = useParams();
        
        const { data:product, isLoading, error} = useGetProductDetailsQuery(productID);

        // const [product,setProduct] = useState({});
        // useEffect( () => {
        //     const fetchProduct = async () => {
                
        //         const { data } = await axios.get(`/api/products/${productID}`);
        //         setProduct(data);
        //     };
        //     fetchProduct();
        // },[productID ]);

        
    


    //const product = products.find((product) => (product._id === productID));

    return (
        <>
            {
              isLoading ? (<h1>Loading</h1>) :
              error ? (<h1>{error.error || error?.data?.message}</h1>) :

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
            
            }
            

            

        </>
    )
    }

export default ProductScreen
