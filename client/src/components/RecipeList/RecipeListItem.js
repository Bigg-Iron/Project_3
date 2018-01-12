// class ImageUpload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {file: '',imagePreviewUrl: ''};
//   }

//   _handleSubmit(e) {
//     e.preventDefault();
//     // TODO: do something with -> this.state.file
//     console.log('handle uploading-', this.state.file);
//   }

//   _handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];

//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result
//       });
//     }

//     reader.readAsDataURL(file)
//   }

//   render() {
//     let {imagePreviewUrl} = this.state;
//     let $imagePreview = null;
//     if (imagePreviewUrl) {
//       $imagePreview = (<img src={imagePreviewUrl} />);
//     } else {
//       $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//     }

//     return (
//       <div className="previewComponent">
//         <form onSubmit={(e)=>this._handleSubmit(e)}>
//           <input className="fileInput" 
//             type="file" 
//             onChange={(e)=>this._handleImageChange(e)} />
//           <button className="submitButton" 
//             type="submit" 
//             onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
//         </form>
//         <div className="imgPreview">
//           {$imagePreview}
//         </div>
//       </div>
//     )
//   }
// }
  
// ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));





// import React from "react";
// import Thumbnail from "../Thumbnail";
// import { Container, Row, Col } from "../Grid";

// // RecipeListItem renders a bootstrap list item containing data from the recipe api call
// export const RecipeListItem = props => (
//   <li className="list-group-item">
//     <Container>
//       <Row>
//         <Col size="xs-4 sm-2">
//           <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
//         </Col>
//         <Col size="xs-8 sm-9">
//           <h3>{props.title}</h3>
//           <p>Ingredients: {props.ingredients}</p>
//           <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to recipe!</a>
//         </Col>
//       </Row>
//     </Container>
//   </li>
// );
