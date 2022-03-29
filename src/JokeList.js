// import React, { Component } from "react";
// import axios from "axios";

// export class DadJoke extends Component {
//   static defaultProps = {
//     numJokes: 10,
//   };

//   constructor(props) {
//     super(props);
//     this.state = { jokeList: [], joke: "", id: "", loading: true };
//   }

//   componentDidMount() {
//     this.getJoke();
//   }

//   async getJoke() {
//     const config = { headers: { Accept: "application/json" } };
//     let res = await axios.get("https://icanhazdadjoke.com/", config);
//     const { joke, id } = res.data;
//     // console.log(res.data);
//     this.setState({ joke: joke, id: id });
//   }

//   getJokeList() {
//     const { jokeList, joke, id } = this.state;
//     const { numJokes } = this.props;

//     let newJoke = this.getJoke(id) !== id ? joke : this.getJoke();

//     console.log(newJoke);
//   }

//   render() {
//     return (
//       <div>
//         <button>New Joke</button>
//         {this.getJokeList}
//       </div>
//     );
//   }
// }

// export default DadJoke;

import React, { Component } from "react";
import axios from "axios";

export class JokeList extends Component {
  static defaultProps = {
    numJokes: 10,
  };

  constructor(props) {
    super(props);
    this.state = { jokeList: [], loading: true };
  }
  componentDidMount() {
    this.getJokes();
  }

  async getJokes() {
    // we are Making new array and pushing to it THEN we gonna pass the whole array in state TO avoid extra rerender
    // also we using WHILE loop instead of for loop to get different jokes
    // for loop will loop the same joke 10 times

    let jokes = [];
    while (jokes.length < this.props.numJokes) {
      const config = { headers: { Accept: "application/json" } };
      let res = await axios.get("https://icanhazdadjoke.com/", config);
      const { joke, id } = res.data;
      jokes.push({ text: joke, id: id, votes: 0 });
    }
    // console.log(jokes);

    this.setState({ jokeList: jokes, loading: false });
  }

  render() {
    const { loading, jokeList } = this.state;

    return (
      <div>
        JokeList
        <button>New Jokes</button>
        {loading
          ? "loading...."
          : jokeList.map((j) => <div key={j.id}>{j.text}</div>)}
      </div>
    );
  }
}

export default JokeList;
