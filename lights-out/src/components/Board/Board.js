import React, { Component } from 'react'
import Cell from '../Cell/Cell'
import './Board.css'

export class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  static defaultProps = {
    nCols: 5,
    nRows: 5,
    chance: 0.25
  }

  createBoard() {
    let board = []

    for(let i = 0; i < this.props.nRows; i++) {
      board[i] = []
      for(let j = 0; j < this.props.nCols; j++) {
        board[i][j] = Math.random() < this.props.chance ? true : false
      }
    }

    return board
  }

  render() {
    const board = this.state.board.map(row => {
      return(
        <tr>
          {row.map(col => {
            return <Cell isLit={col} />
          })}
        </tr>
      )
    })
    return (
      <table className="Board">
        <tbody>
          {board}
        </tbody>
      </table>
    )
  }
}

export default Board
