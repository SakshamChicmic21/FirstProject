import React from "react";

const ChildComponent = React.memo(
  (props: { buttoname: string; handleClick: () => void }) => {
    console.log("Child component rendered");
    return (
      <div>
        <button onClick={props.handleClick}>{props.buttoname}</button>
      </div>
    );
  }
);

export default ChildComponent;

// React.memo is used here to optimize the ChildComponent by preventing unnecessary re-renders when its props do not change.
// In this case, since the buttoname prop is static, the ChildComponent will only render once, even if the parent component re-renders.

// when we pass the function from parent to child without useCallback then on every render of parent a new instance of function is created
// and that will cause the child to re render even if there is no change in props value.
// but when we use useCallback in parent component the function instance remains the same between renders unless its dependencies change
// so the child component will not re render unnecessarily.
