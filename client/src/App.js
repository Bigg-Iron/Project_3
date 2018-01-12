import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''};
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `This is the file you selected - ${
        this.state.file[0]
      }`
    );
    console.log(this.state.file);
  }

  handleImageChange(event){
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div>
        <Nav />
        <Jumbotron />
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
                        <input className="fileInput" type="file" onChange={(event)=>this.handleImageChange(event)}/>
                      </label>
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={(event)=>this.handleSubmit(event)}
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
                  {$imagePreview}
                </div>
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
