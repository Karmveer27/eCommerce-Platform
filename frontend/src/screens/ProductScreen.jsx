import React, { useState } from 'react'
// import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import Rating from '../components/Rating';
import { Row, Col , Image, ListGroup, Card, Button, ListGroupItem, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../slices/productsApiSplice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { addToCart } from '../slices/cartSlice';


    function ProductScreen() {
        const [quantity,setQuantity] = useState(1);

        const {id:productID} = useParams();
        const dispatch = useDispatch();
        const navigate = useNavigate();
        
        const { data:product, isLoading, error} = useGetProductDetailsQuery(productID);

        const addToCartHandler = () => {
            dispatch(addToCart({...product, quantity}))
            navigate('/cart')
        }

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
              isLoading ? (<Loader />) :
              error ? (<Message variant='danger'>{error.error || error?.data?.message}</Message>) :

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
                            <ListGroupItem>
                                

                                    
                                    {product.countInStock > 0 && 
                                    <Row>
                                    <Col>
                                        Quantity:
                                    </Col>
                                    <Col>
                                        <Form.Control
                                        as='select'
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                       >

                                       {[...Array(product.countInStock).keys()].map((x) => 
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                       )}
                        
                                            
                                       </Form.Control>
                                    </Col>
                                    </Row>
                                    }
                                       
                                    
                                
                            </ListGroupItem>

                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled = {product.countInStock === 0} onClick={addToCartHandler} >
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
