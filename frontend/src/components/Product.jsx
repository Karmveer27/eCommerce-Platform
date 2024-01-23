import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom' //CHanging <a> tags to links gets rid of the spinner loading when we use a link because anchor tags use client sided js which is slow
import Rating from './Rating'
function Product({product}) {
  return (
    <Card className="py-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </Link>
        <Card.Body>

            <Link to={`/product/${product._id}`}> 
              <Card.Title as="div" className='product-title'>
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as='h3'>${product.price}</Card.Text>

            <Card.Text>
              <Rating value={product.rating} text={product.numReviews}/>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
