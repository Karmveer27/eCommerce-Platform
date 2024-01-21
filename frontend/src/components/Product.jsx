import { Card } from 'react-bootstrap'
function Product({product}) {
  return (
    <Card className="py-3">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </a>
        <Card.Body>

            <a href={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </a>

            <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
