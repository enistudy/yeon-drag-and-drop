import React from "react";
import Board from "./component/board";
import Card from "./component/card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p> card 1 </p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p> card 2 </p>
          </Card>
        </Board>
      </div> 
    </div>
  );
}

export default App;
