import React, { useState } from "react";

// hocks   |   useState    (useEfee)

const DisplayName = (props) => {
  const [data, setData] = useState({
    number: 0,
    randomText: "asdasdasd",
  });

  // useState will always return a array containing two keys (values)
  // 1st key of array will be current value of state
  // 2nd key will be a function to set new value of state, and this will rerender trhe component
  console.log({ data });
  const { id, name } = props;

  const increHandler = () => {
    // state.number = 23;   //  muteable, unmu
    setData((oldState) => {
      return {
        number: ++oldState.number,
      };
    });
  };

  const decreHandler = () => {
    // state.number = 23;   //  muteable, unmu
    setData((oldState) => {
      return {
        number: --oldState.number,
      };
    });
  };

  const testFunction = () => {
    setData({
      randomText: "csm,nxzmbvxczv",
    });
  };

  return (
    <>
      <br />
      <br />

      <div>
        Number: {data.number}, text: {data.randomText}
      </div>
      <br />

      <button onClick={increHandler}>Incre</button>
      <button onClick={() => decreHandler()}>Decre</button>
      <button onClick={() => testFunction()}>change text</button>
    </>
  );
};

export default DisplayName;
