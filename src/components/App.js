import React from "react";
// import css
import "../css/App.css";
// import Component
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    // state has position
    this.state = { position: "top" };

    this.handleChange = this.handleChange.bind(this);
  }

  // call on change of dropdown value
  handleChange(event) {
    this.setState({ position: event.target.value });
  }

  // call on Button click
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
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

        {/* component with passing props */}
        <Button position={this.state.position} />
      </form>
    );
  }
}
export default App;
