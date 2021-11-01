import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  // arrow functions automatically refer to the current this without referring to window
  handleIncrement = () => {
    // console.log("clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeStyleClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeStyleClass() {
    let badgeStyle = "badge m-2 bg-";
    badgeStyle += this.state.value === 0 ? "warning" : "primary";
    return badgeStyle;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
