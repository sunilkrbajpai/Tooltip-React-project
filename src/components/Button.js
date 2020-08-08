import React from "react";
import "../css/App.css";

// Button with tooltip Component
class Button extends React.Component {
  render() {
    const { position } = this.props;
    return (
      <div className="App">
        <div class="tooltip">
          <button className="btn"></button>
          <span class={`tooltiptext-${position}`}>{`${position} tooltip`}</span>
        </div>
      </div>
    );
  }
}

export default Button;
