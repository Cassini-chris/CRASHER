import React from "react";

export default function Child(props) {
    return (
      <div className="child">
       <button onClick={() => props.onChildClick()}>Child</button>
      </div>
    );
  }
