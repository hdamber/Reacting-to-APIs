import React from "react";
// import * as Ghiblilogo from '../images/'
import "isomorphic-fetch";
import "es6-promise";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  loadFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films =>
        this.setState({
          films: films,
          isLoaded: true
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          {this.state.films.map(film => {
            return (
              <div key={film.id}>
                <h1>{film.title}</h1>
                <p>{film.description}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <button onClick={() => this.loadFilms()}>Load Files</button>;
    }
  }
}

export default App;



// example of a fetch request in the componentDidMount lifecycle method of a class-based React component
// componentDidMount() {
//     fetch('https://ghibliapi.herokuapp.com/people')
//         .then(res => res.json())
//         .then(people => this.setState({ people: people }))
//         .catch(err => console.log(err));
// }
