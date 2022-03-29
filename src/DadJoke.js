import React, { Component } from "react";
import axios from "axios";

export class DadJoke extends Component {
  constructor(props) {
    super(props);
    this.state = { joke: "", loading: true };
  }

  async componentDidMount() {
    const { data } = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });

    const joke = data.joke;
    return this.setState({
      joke,
      //  loading: false
    });
    // console.log(data);
    // this.setState({ joke: data.joke, loading: false });
  }

  render() {
    return (
      <div>
        DadJoke
        <button>New Joke</button>
      </div>
    );
  }
}

export default DadJoke;
