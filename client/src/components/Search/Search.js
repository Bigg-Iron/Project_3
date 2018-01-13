import React from "react";
import "./Search.css";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";
import App from "../../App.js";

const Search = props => (
  
  <Container>
          <Row>
            <Col size="md-12">
            <form
        onSubmit={this.handleSubmit}>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <label>
                        Upload file:
                        <input className="fileInput" type="file" onChange={(event)=>this.props.handleImageChange(event)}/>
                      </label>
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={(event)=>this.props.handleSubmit(event)}
                        type="success"
                        className="input-lg">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {
                <div className="imgPreview">
                  {/* {$imagePreview} */}
                </div>
              }
            </Col>
          </Row>
        </Container>
);

export default Search;