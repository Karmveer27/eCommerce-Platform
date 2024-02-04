//import products from "../products"
import Product from "../components/Product"
import {Row, Col} from 'react-bootstrap'
// import { useState, useEffect} from 'react';
// import axios from 'axios'
import { useGetProductsQuery } from "../slices/productsApiSplice.js"
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";



function HomeScreen() {

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products')
    
  //     setProducts(data);
  //   }
  //   fetchProducts();
  // },[]);

  const {data: products, isLoading, error} = useGetProductsQuery();
  
  return (
    <>
    
      {isLoading ? (<Loader />) :
        error ? (<Message variant='danger'>{error.error || error?.data?.message}</Message>) :
        (
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
       
    </>
  )
}

export default HomeScreen
