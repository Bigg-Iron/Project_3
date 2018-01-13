import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import ImgSearch from "./components/ImgSearch";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''};
  }

  handleSubmit = (event) => {
    event.preventDefault();  
      this.setState(
        {
        file: this.state.file
      })
  }

  handleImageChange = (event) =>{
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onLoadEnd = () => {
      this.setState(
        {
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    console.log('HELLO!!!!! ', file);

    // reader.readAsDataURL(file)
    this.showImg(file);
  }

  showImg = (imagePreviewUrl) =>{
    if (!imagePreviewUrl) {
      console.log('INSIDE!!!!');
      imagePreviewUrl = null;
    }
    this.setState(
      {
      imagePreviewUrl: imagePreviewUrl
    })
  }

  render() {
    // let {imagePreviewUrl} = this.state;
    // let imagePreview = null;
    // if (imagePreviewUrl) {
    //   imagePreview = (<img src={imagePreviewUrl} />);
    // } else {
    //   imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    // }
    return (
      <div>
        <Nav />
        <Jumbotron />
        <ImgSearch 
          handleImageChange={this.handleImageChange}
          handleSubmit = {this.handleSubmit}
          imagePreviewUrl = {this.state.imagePreviewUrl}
        />
      </div>
    );
  }
}


export default App;
