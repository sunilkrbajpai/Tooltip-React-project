import React from "react";
import "./App.css";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: "top" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ position: event.target.value });
  }

  render() {
    return (
      <form className="App">
        <label>
          <h3>Tooltip Position:</h3>
          <select
            className="dropdown"
            value={this.state.position}
            onChange={this.handleChange}
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </label>

        <Button position={this.state.position} />
      </form>
    );
  }
}
export default App;
