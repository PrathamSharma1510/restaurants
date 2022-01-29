import React from "react";
const Points = (props) => {
  console.log(props.array);
  return (
    <>
      {props.array.map((item) => {
        return <div key={Math.random()}>{item}</div>;
      })}
    </>
  );
};
export default Points;
