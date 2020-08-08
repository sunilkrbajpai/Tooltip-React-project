import React from "react";
import "./App.css";
import Tooltip from "@material-ui/core/Tooltip";
import Btn from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const CustomTooltip = withStyles({
  tooltip: {
    color: "white",
    backgroundColor: " rgb(100, 99, 99)",
    fontSize: "16px",
  },
})(Tooltip);

class Button extends React.Component {
  render() {
    const { position } = this.props;
    return (
      <div className="App">
        <CustomTooltip
          title={`${position} tooltip`}
          arrow
          className="tooltip"
          placement={position}
        >
          <Btn variant="contained" color="secondary" className="btn">
            I am a Button
          </Btn>
        </CustomTooltip>
      </div>
    );
  }
}

export default Button;
