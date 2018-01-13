import React from "react";
import "./ImgSearch.css";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";

const ImgSearch = props => {

  console.log('THIS IS IT!!!!!', props.imagePreviewUrl);

  const renderUrl = function(url) {
    if(url){
      return <div>HELLO!</div>
    } else {
      return <div>SAD :(</div>
    }
  }

  return (
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
                            <input 
                            className="fileInput" type="file"
                            onChange={props.handleImageChange}/>
                          </label>
                        </Col>
                        <Col size="xs-3 sm-2">
                          <Button
                            onClick={props.handleSubmit}
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
                    <div className="imgPreview">

                      {renderUrl(props.imagePreviewUrl || null)}
                    </div>
                </Col>
              </Row>
        </Container>
);

}
  
  

export default ImgSearch;