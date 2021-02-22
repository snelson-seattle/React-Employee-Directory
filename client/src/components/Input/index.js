import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Input(props) {
  return (
    <div className="container">
      <div className="input-group mb-3">      
        <input onChange={props.onChange} type="text" class="form-control" placeholder="Search by employee name" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
      </div>
    </div>
    
  );
}

export default Input;
