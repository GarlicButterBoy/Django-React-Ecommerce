import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen({ match }) {
  const { id } = useParams();
  const product = products.find((p) => String(p._id) === id);
  if (!product) return null; //or fallback UI

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
                  <Image src={product.image} alt=/>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
