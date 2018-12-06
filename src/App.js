import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

const API_KEY = "b75f9d6e";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie:'',
      movies: []
    };
  }

  onInputChange = (event) => {
  this.setState({movie: event.target.value});
  
}

  onButtonSubmit= (movie) => {
   fetch(`http://www.omdbapi.com/?t=${
      this.state.movie
    }&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const updatedMovies = this.state.movies;
        updatedMovies.push(data);
        this.setState({
          movies:updatedMovies,
        })
        console.log(this.state.movies);
      });
  }

  render() {
    return (
       <div className="App">
        <SearchBox
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit} 
        />
        <p className="card-text card-meta">Title: { this.state.movies.Title }, Director: { this.state.movies.Director }</p>
      </div>
    );
  }
}

export default App;
