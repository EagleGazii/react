import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import './Board.css';

/**Game board of Lights out.
 * 
 * Properties:
 * 
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 * 
 * State:
 * 
 * - hasWon: boolean, true when board is all of
 * - board: array-of-arrays of true/flase
 * 
 *      For this board:
 *          .   .   .
 *          0   0   .       (where . is off, and 0 is on)
 *          .   .   .
 * 
 *      This would be: [[f,f,f],[t,t,f],[f,f,f]]
 * 
 * This should render an HTML table of individual <Cell /> components.
 * 
 * This doesn't handle any clicks --- clicks are on individual cells
 * 
 */
class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.25
    }
    constructor(props) {
        super(props);
        // TODO: set initial state
        this.state = {
            hasWon: false,
            board: this.createBoard()
        }

    }
    /** create a board nrwos high/ncols wide, each cell randomly lit or unlit */

    createBoard() {
        let board = [];
        // TODO: create array-of-arrays of true/false values
        for (let i_index = 0; i_index < this.props.nrows; i_index++) {
            let row = []
            for (let j_index = 0; j_index < this.props.ncols; j_index++) {
                row.push(Math.random() < this.props.chanceLightStartsOn);

            }
            board.push(row)

        }
        return board;
    }
    /** handle changing a cell: update  board & determine if winner */

    flipCellsAround(coord) {
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [rowIndex, colIndex] = coord.split("-").map(Number);


        function flipCell(rowIndex, colIndex) {
            // if this coord is actually on board, flip it

            if (rowIndex >= 0 && rowIndex < nrows && colIndex >= 0 && colIndex < ncols) {
                board[rowIndex][colIndex] = !board[rowIndex][colIndex];
            }
        }

        // TODO: flip this cell and the cells around it
        flipCell(rowIndex, colIndex);
        flipCell(rowIndex + 1, colIndex);
        flipCell(rowIndex - 1, colIndex);
        flipCell(rowIndex, colIndex + 1);
        flipCell(rowIndex, colIndex - 1);

        // win when every cell is turned off
        // TODO: determine is the game has been won
        let hasWon = board.every(row => row.every(cell => !cell));
        this.setState({ board: board, hasWon: hasWon })
    }
    /** Render game board or winning message */



    render() {
        // if the game is won, just show a winning msg & render nothing else
        // TODO
        // make table board
        // TODO
        let tableBoard = [];
        for (let rowIndex = 0; rowIndex < this.props.nrows; rowIndex++) {
            let row = [];
            for (let colIndex = 0; colIndex < this.props.ncols; colIndex++) {
                let coord = `${rowIndex}-${colIndex}`;
                row.push(<Cell key={coord} isLit={this.state.board[rowIndex][colIndex]} flipCellsAroundMe={() => this.flipCellsAround(coord)} />)

            }
            tableBoard.push(<tr key={`${rowIndex}`}>{row}</tr>)
        }




        return (
            <table className="Board">
                <tbody>
                    {this.state.hasWon ? <tr><td>You Win</td></tr> : tableBoard}

                </tbody>
            </table>
        )
    }
}


export default Board;
