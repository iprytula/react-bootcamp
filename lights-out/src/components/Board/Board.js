import React, { Component } from 'react'
import Cell from '../Cell/Cell'
import './Board.css'
import Header from '../Header/Header'
import Btn from '../Btn/Btn';
import Win from '../Win/Win';

export class Board extends Component {
  state = {
    hasWon: false,
    board: this.createBoard()
  }

  static defaultProps = {
    nCols: 5,
    nRows: 5,
    litChance: 0.30
  }

  createBoard() {
    const board = []

    for(let i = 0; i < this.props.nRows; i++) {
      board[i] = []
      for(let j = 0; j < this.props.nCols; j++) {
        board[i][j] = Math.random() < this.props.litChance ? true : false
      }
    }

    return board
  }

  flipCells(id) {
    const {nCols, nRows} = this.props
    const board = this.state.board
    const [y, x] = id.split("-").map(Number)

    function flipCell(y, x) {
      console.log(`x: ${x}, y: ${y}`)
      
      if(y >= 0 && y < nRows && x >= 0 && x < nCols)  {
        board[y][x] = !board[y][x]
      }
    }
    flipCell(y, x)
    flipCell(y, x - 1)
    flipCell(y, x + 1)
    flipCell(y - 1, x)
    flipCell(y + 1, x)

    const hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board: board, hasWon: hasWon });
  }

  renderBoard(board) {
    return board.map((row, rowIndex) => {
      return(
        <tr key={`row-${rowIndex}`}>
          {row.map((isLit, celIndex) => {
            const id = `${rowIndex}-${celIndex}`;
            return(
              <Cell
                isLit={isLit}
                flipCellsAround={() => this.flipCells(id)}
                id={id}
                key={id}
              />
            )
          })}
        </tr>
      )
    })
  }

  startNewGame() {
    this.setState({
      hasWon: false,
      board: this.createBoard()
    })
  }

  render() {
    return (
      <div className="Game">
        <Header first="Lights" second="Out" />
        {!this.state.hasWon ?
          <table className="Board">
            <tbody>
              {this.renderBoard(this.state.board)}
            </tbody>
          </table>
          :
          <Win />}
        <Btn class="New-game-btn" text="New Game" click={() => {this.startNewGame()}} />
      </div>
    )
  }
}

export default Board
