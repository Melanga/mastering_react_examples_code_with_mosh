import './App.css';
import NavBar from './components/navbar';
import React, { Component } from 'react';
import Counters from './components/counters';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // if we directly modify above spread counters, it will modify the object in the state directly without cloning it.
    // thats why we add this line to clone another counters object in order to update the state.
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // if we directly modify above spread counters, it will modify the object in the state directly without cloning it.
    // thats why we add this line to clone another counters object in order to update the state.
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };


  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  
  render() {
    return(
    <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
    <main className="container">
      <Counters 
      counters = {this.state.counters}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onReset={this.handleReset}
      />
    </main>
    </React.Fragment>
    );
    }
}

export default App;
