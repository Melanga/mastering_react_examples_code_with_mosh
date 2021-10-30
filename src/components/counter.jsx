import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Counter extends Component {
  state = {
    imageUrl: "https://picsum.photos/200",
    movies: getMovies(),
    count: getMovies().length,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies, count: movies.length });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return (
        <React.Fragment>
          <span className={this.getBadgeStyleClass()}>
            {this.formatCount()}
          </span>
        </React.Fragment>
      );
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeStyleClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }

  // arrow functions automatically refer to the current this without referring to window
  handleIncrement = () => {
    // console.log("clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeStyleClass() {
    let badgeStyle = "badge m-2 bg-";
    badgeStyle += this.state.count === 0 ? "warning" : "primary";
    return badgeStyle;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
