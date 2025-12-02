import { Component, useState } from "react";
import "./App.css";

class Component1 extends Component {
  constructor(props) {
    console.log("Contructor 1");

    super(props);
  }
  render() {
    console.log("Render 1");
    return <div>Component 1</div>;
  }

  componentDidMount() {
    console.log("Mounted 1");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount 1");
  }
}

class Component2 extends Component {
  render() {
    return <div>Component 2</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anyLogicVariable: 2,
      isHidden: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHideButtonClick = this.handleHideButtonClick.bind(this);
  }

  componentDidMount() {
    console.log("Mounted App");
    // this.setState({
    //   anyLogicVariable: 4,
    // });
  }

  componentDidUpdate() {
    console.log("Updated App");
  }

  render() {
    console.log("Render App");
    return (
      <>
        {this.state.anyLogicVariable === 2 ? <Component1 /> : <Component2 />}
        {!this.state.isHidden && (
          <button onClick={this.handleClick}>Change Variable</button>
        )}
        <button onClick={this.handleHideButtonClick}>
          {this.state.isHidden ? "Show" : "Hide"}
        </button>
      </>
    );
  }

  handleClick() {
    this.setState({
      anyLogicVariable: 3,
    });
  }

  handleHideButtonClick() {
    this.setState((prevState) => ({
      isHidden: !prevState.isHidden,
    }));
  }
}

export default App;
