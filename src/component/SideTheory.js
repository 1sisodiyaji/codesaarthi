import React from "react";
import { Link } from "react-router-dom";

const SideTheory = () => {
  return (
    <>
      <div className="container-fluid py-5 text-light">
        <Link to="/array" style={{ color: "white" }}>
          {" "}
          <p> 1. Introduction to Arrays: </p>{" "}
        </Link>
        <Link to="/transversing-of-array" style={{ color: "white" }}>
          {" "}
          <p> 2. Array Traversal: </p>
        </Link>
        <Link to="/transversing-of-array" style={{ color: "white" }}>
          <p> 3. Reversing an Array: </p>
        </Link>
        <Link to="/transversing-of-array" style={{ color: "white" }}>
          <p> 4. Palindrome Check with Arrays: </p>
        </Link>
        <Link to="/transversing-of-array" style={{ color: "white" }}>
          <p> 5. Sorting Arrays: </p>
        </Link>
        <Link to="/transversing-of-array" style={{ color: "white" }}>
          <p> 6. Searching in Arrays: </p>
        </Link>
        <Link to="/transversing-of-array" style={{ color: "white" }}>
          <p> 7. Multi-dimensional Arrays: </p>
        </Link>
        <Link to="/transversing-of-array" style={{ color: "white" }}>
          <p> 8. Dynamic Arrays and Lists: </p>
        </Link>
        <Link to="/transversing-of-array" style={{ color: "white" }}>
          <p> 9. Common Mistakes and Best Practices: </p>
        </Link>
        <Link to="/transversing-of-array" style={{ color: "white" }}>
          <p> 10. Challenges and Exercises: </p>
        </Link>
      </div>
    </>
  );
};

export default SideTheory;
