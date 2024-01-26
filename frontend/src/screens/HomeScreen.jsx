//import products from "../products"
import Product from "../components/Product"
import {Row, Col} from 'react-bootstrap'
import { useState, useEffect} from 'react';
import axios from 'axios'



function HomeScreen() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
    
      setProducts(data);
    }
    fetchProducts();
  },[]);

  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((p) => (
                <Col key={p._id} sm={12} m={6} lg={4} xl={3}>
                    <Product product={p} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen
