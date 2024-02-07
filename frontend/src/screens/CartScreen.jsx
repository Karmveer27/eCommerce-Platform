// Goals:
// Create cart screen
// Show items on cart screen if items are in cart : if emtpy show message componenet
// Show prices on cart screen
// Add change qty form and have it update state

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  Image,
  Row,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message.jsx";
import { FaTrash } from "react-icons/fa";
import { addToCart, RemoveFromCart } from "../slices/cartSlice.js";

function CartScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  let numOfCartItems = 0;
  cart.cartItems.forEach((item) => {
    numOfCartItems += item.quantity;
  });

  const setQuantity = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(RemoveFromCart({id}));
  }

  //console.log(cart);

  return (
    <>
      <Row>
        <Col md={8}>
          <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
          {cart.cartItems.length > 0 ? (
            <ListGroup variant="flush">
              {cart.cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row key={item._id}>
                    <Col md={2}>
                      <Image src={item.image} fluid rounded />
                    </Col>

                    <Col md={3}>
                      <Link to={`/product/${item._id}`}>{item.name}</Link>
                    </Col>

                    <Col md={2}>${item.price}</Col>

                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.quantity}
                        onChange={(e) =>
                          setQuantity(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>

                    <Col md={2}>
                      <Button type="button" variant="light" onClick={() => (removeFromCartHandler(item._id))}>
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          )}
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Subtotal ({numOfCartItems}) items</h2>
                {cart.totalPrice > 0 && <p>Items Price: ${cart.itemsPrice}</p>}
                {cart.totalPrice > 0 && <p>Tax Price: ${cart.taxPrice}</p>}
                {cart.totalPrice > 0 && (
                  <p>Shipping Price: ${cart.shippingPrice}</p>
                )}
                {cart.totalPrice > 0 && <p>Total Price: ${cart.totalPrice}</p>}
              </ListGroup.Item>
              <ListGroup.Item>
                    <Button type='button' className='btn-block' disabled={cart.cartItems.length === 0 }>
                        Proceed to Checkout
                    </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          
        </Col>
      </Row>
    </>
  );
}

export default CartScreen;
