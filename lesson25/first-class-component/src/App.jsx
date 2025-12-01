import { useState, Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class CounterDisplay extends Component {
  state = {
    color: "red",
  };
  constructor(props) {
    super(props);

    // this.state = {
    //   color: "red",
    // };
  }

  render() {
    const { counter } = this.props;

    // DON"T DO LIKE THIS!!!
    // this.setState({
    //   color: "green",
    // });

    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        <span>{counter}</span>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      age: 34,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    console.log("APP RENDER");
    console.log(this.state);

    return (
      <>
        <CounterDisplay counter={this.state.count} />
        <button onClick={this.handleClick}>Count</button>
      </>
    );
  }

  handleClick() {
    this.setState({
      count: 2,
    });
  }
}

export default App;
