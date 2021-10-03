// class based component
import React, { Component, useState } from "react";

// hooks   (useState, useEffect, useCallback)

// class App extends Component {
//   state = {
//     name: "ahsan",
//     text: "something",
//     number: 1,
//     text2: 1
//   };

//   render() {
//     // HTML => JSX
//     return (
//       <>
//         <h1 className="asdasd btn m">Name: {this.state.name}</h1>
//         <h2 className="asdasd btn m">Text: {this.state.text}</h2>
//         <hr />
//         <h2 className="asdasd btn m">Text2: {this.state.text2}</h2>
//         <hr />
//         <input
//           value={this.state.name}
//           onChange={(event) => {
//             // this.state.name = event.target.value // never
//             this.setState({
//               text2: this.state.number + this.state.text2,
//               name: event.target.value,
//             });
//             console.log(event.target.value);
//           }}
//         />
//       </>
//     );
//   }
// }

// JSX convert
// React.createElement('div', null, React.createElement('h1', null, 'working'))

// functional component
const App = () => {
  const [counter, setCounter] = useState(0); // es6  array destructuring

  const increCounter = () => {
    setCounter((oldVal) => {
      return ++oldVal;
    });
  };

  const decreCounter = () => {
    setCounter((oldVal) => {
      return --oldVal;
    });
  };
  return (
    <>
      <h1>{counter}</h1>
      <br />
      <button onClick={increCounter}>incre</button>
      <button onClick={decreCounter}>decre</button>
    </>
  );
};

export default App;
