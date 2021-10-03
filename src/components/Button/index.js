import React from "antd";
import "./styles.css";

const Button = (props) => {
  const buttonStyle = {
    color: "red",
  };
  const { id, children } = props; // es6  object destructuring
  return (
    <>
      <button className="btn" style={{
          borderTop: '10px solid red'
      }}>{children}</button>
    </>
  );
};

export default Button;
