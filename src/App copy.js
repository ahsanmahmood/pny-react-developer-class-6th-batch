import React, { Component } from "react";

// JSX
// limitations of JSX

class App extends Component {
  state = {
    // state component values , change component redraw (render)
    counter: 2,
    name: "ahsan",
  };

  asd = "ajhsahahs";

  increHandler = () => {
    // this.state.counter = 23;   //  muteable, unmu
    this.setState((oldState) => {
      return {
        counter: ++oldState.counter,
      };
    });
  };

  decreHandler = () => {
    // this.state.counter = 23;   //  muteable, unmu
    this.setState((oldState) => {
      return {
        counter: --oldState.counter,
      };
    });
  };

  testFunction = () => {
    // console.log({ val: this.asd });
    this.asd = "dsadfasdasd";
    // console.log({ val: this.asd });
  };

  render() {
    // console.log("Class component", { props: this.props });

    const { text: textCompo, text2 } = this.props;

    // console.log({ state: this.state });
    return (
      <>
        <div>"{textCompo}"</div>
        <br />
        <h3>{this.asd}</h3>
        <div>Hello World! Name: "{this.state.name}"</div>
        <br />
        <h1>{this.state.counter}</h1>
        <br />

        <button onClick={this.increHandler}>Incre</button>
        <button onClick={() => this.decreHandler()}>Decre</button>
        <button onClick={() => this.testFunction()}>change text</button>
      </>
    );
  }
}

export default App;
