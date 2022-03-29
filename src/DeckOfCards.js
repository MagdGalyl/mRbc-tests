import React, { Component } from "react";
import axios from "axios";

export class DeckOfCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckId: "",
      cards: [],
      card: null,
    };
    this.drawCard = this.drawCard.bind(this);
  }

  async componentDidMount() {
    await axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          deckId: res.data.deck_id,
        });
      });
  }

  async drawCard() {
    await axios
      .get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({
          card: res.data.cards[0],
        });
      });
  }

  render() {
    return (
      <div>
        DeckOfCards
        <button onClick={this.drawCard}>Draw a Card</button>
        {this.state.card && ( // if card is not null  then show the card  else show nothing
          <div>
            <img src={this.state.card.image} alt="card" />
            <p>{this.state.card.value} of {this.state.card.suit}</p>
          </div>
          // if card is not null then show the card else show nothing (null)
        )}
        
      </div>
    );
  }
}

export default DeckOfCards;
