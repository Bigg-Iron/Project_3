import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(
      this
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `This is the file you selected - ${
        this.fileInput.files[0].name
      }`
    );
    console.log(this.fileInput.files[0]);
  }

//   render() {
//     return (
//       <form
//         onSubmit={this.handleSubmit}>
//         <label>
//           Upload file:
//           <input
//             type="file"
//             ref={input => {
//               this.fileInput = input;
//             }}
//           />
//         </label>
//         <br />
//         <button type="submit">
//           Submit
//         </button>
//       </form>
//     );
//   }
// }


  // handleInputChange = event => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getRecipes(this.state.recipeSearch)
  //     .then(res => this.setState({ recipes: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
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
                        <input
                          type="file"
                          ref={input => {
                            this.fileInput = input;
                          }}
                        />
                      </label>
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
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
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Images to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
