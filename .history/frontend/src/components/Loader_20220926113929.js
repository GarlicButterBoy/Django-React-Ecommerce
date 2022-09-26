import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div
      class="spinner-grow text-warning"
      role="status"
      style={{
        height: "100px",
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loader;
