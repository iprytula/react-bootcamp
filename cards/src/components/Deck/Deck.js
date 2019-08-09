import React, { Component } from 'react'
import axios from 'axios'
import Button from '../Button/Button'

const API_URL = 'https://deckofcardsapi.com/api/deck'

class Deck extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      deck: null,
      drawn: null
    }

    this.handleNewCard = this.handleNewCard.bind(this)
  }

  async componentDidMount() {
    const deck = await axios.get(`${API_URL}/new/shuffle/`).then(response => response.data)

    this.setState({deck: deck})
  }

  async handleNewCard() {
    const card = await axios.get(`${API_URL}/${this.state.deck.deck_id}/draw/`).then(response => response.data)
    
    // this.setState(st => ({
    //   drawn: [
    //     ...st.drawn,
    //     {
    //       id: card.code,
    //       image: card.image,
    //       name: `${card.suit} ${card.value}`
    //     }
    //   ]
    // }))
  }

  render() {
    return (
      <div>

        <Button text='Get Card!' click={this.handleNewCard} />
      </div>
    )
  }
}

export default Deck