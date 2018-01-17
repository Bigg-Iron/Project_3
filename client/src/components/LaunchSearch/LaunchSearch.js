import React from "react";
import "./LaunchSearch.css";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";
import Input from "../Input";

const LaunchSearch = props => {
    <Container>
        <Row>
          <Col size="md-12">
          <form
      onSubmit={props.handleFormSubmit}>
              <Container>
                <Row>
                <Col size="xs-9 sm-10">
                  <Input
                    name="launchesSearch"
                    value={props.launchesSearch}
                    onChange={props.handleInputChange}
                    placeholder="Search For a Launch"
                  />
              </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={props.handleFormSubmit}
                      type="success"
                      className="input-lg">
                      Search for Launch!
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <div>
            Display Launches Here
          </div>
        </Row>
        </Container>
}

export default LaunchSearch;