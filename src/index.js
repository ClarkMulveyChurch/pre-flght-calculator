import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./calculator.css";
import app from "./utils/database/config"
import dbActions from "./utils/database/dbActions"

class Square extends React.Component {
  render() {
    return <button className="square">{/* TODO */}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Chart extends React.Component {
  render() {
    return (
      <div className="calculator">
        <h1>Weight & Balance Form</h1>
        <table className="calcTable">
          <tr>
            <th></th>
            <th>Weight</th>
            <th>Arm</th>
            <th>Moment</th>
          </tr>
          <tr>
            <th>Aircraft</th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
          </tr>
          <tr>
            <th>Pilot & Front Pass</th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
          </tr>
          <tr>
            <th>Mid Passengers</th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
          </tr>
          <tr>
            <th>Rear Passengers</th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
          </tr>
          <tr>
            <th>Aft Bag #1</th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
          </tr>
          <tr>
            <th>Aft Bag #2</th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
          </tr>
          <tr>
            <th>Fuel</th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
          </tr>
          <tr>
            <th>Total</th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
            <th>
              <input></input>
            </th>
          </tr>
        </table>
        <button onClick={() => dbActions.writeUserData('1', 'clark', 'my@email.com', '111-111-1111')}>write to DB</button>
        <button onClick={() => dbActions.getUserById('1')}>Read from DB</button>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Chart />);
