import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //object destructuring to prevent this.props repetition
    const { onIncrement, onDelete, onReset, counters } = this.props;

    return (
      <div>
        <button className="btn btn-secondary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
