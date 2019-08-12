import React, { Component } from 'react'
import axios from 'axios'
import Button from '../Button/Button'
import Card from '../Card/Card'
import './Deck.css'

const API_URL = 'https://deckofcardsapi.com/api/deck'

class Deck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deck: null,
      drawn: [],
      remaining: null
    }

    this.handleNewCard = this.handleNewCard.bind(this)
  }

  async componentDidMount() {
    const deck = await axios.get(`${API_URL}/new/shuffle/`).then(response => response.data)

    this.setState({ deck: deck })
  }

  async handleNewCard() {
    const data = await axios.get(`${API_URL}/${this.state.deck.deck_id}/draw/`).then(response => response.data)

    if (this.state.remaining === 0) {
      alert('refresh the page to get new card')
      return null
    }

    this.setState(st => ({
      drawn: [
        ...st.drawn,
        {
          id: data.cards[0].code,
          image: data.cards[0].image,
          name: `${data.cards[0].suit} ${data.cards[0].value}`
        }
      ],
      remaining: data.remaining
    }))
  }

  render() {
    return (
      <div>
        <Button text='Get Card!' click={this.handleNewCard} />
        {this.state.remaining ? <p style={{color: '#fff'}}>Remaining {this.state.remaining} cards</p>: ''}
        <div className="Deck">
          {this.state.drawn.map(card => <Card img={card.image} name={card.name} key={card.id} />)}
        </div>
      </div>
    )
  }
}

export default Deck