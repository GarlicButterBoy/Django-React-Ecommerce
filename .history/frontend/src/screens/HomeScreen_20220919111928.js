import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";

function HomeScreen() {
  return (
    <div>
          <h1>Latest Products</h1>
          <Row>
              {products.map()}
          </Row>
    </div>
  );
}

export default HomeScreen;
