import React from "react";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          hi
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.id}</h3>
          <p>Launch Name: {props.name}</p>
          <p>Launch Date: {props.net}</p>
        </Col>
      </Row>
    </Container>
  </li>
);
