import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Input = props => (


/* <form action="/upload" className="dropzone needsclick dz-clickable">

<div className="dz-message needsclick">
Drop picture here or click to upload.

</div>

</form> */


  // <div className="form-group">
  //   <input className="form-control input-lg" type="text" {...props} />
  // </div>

    <div className="form-group">
    <input className="dropzone needsclick dz-clickable" action="/upload" {...props} />
  </div>
);

export default Input;
