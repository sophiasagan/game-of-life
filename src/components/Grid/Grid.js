import './Grid.css';
import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import Game from '../Game';

class Grid extends Component {
  constructor (props) {
    super(props);
    this.state = {ticks: 0};
    this.Game = new Game(() => {this.setState({ticks: this.state.ticks + 1})});
  }

  onStartClick = () => { this.Game.startGeneration(); }
  onStopClick = () => { this.Game.stopGeneration(); }
  onResetClick = () => { this.Game.resetGrid(); }
  onRandomClick = () => { this.Game.randomize(); }
  onCellClick = (i, j) => { this.Game.swapCell(i, j); }
  onChangeRange = (e) => { this.Game.setSpeed(e.target.value); }

  render() {
    const grid = this.Game.grid;
    return (
      <div>
        <div className='grid'>
          {
            grid.map((sub, i) => {
              return (
                <div className={'col'} key={i}>
                  {sub.map((v, j) => {
                    return (
                      <div key={j}>
                        <Cell i={i} j={j} onCellClick={this.onCellClick} value={v} />
                      </div>
                    );
                  })}
                </div>
              );
            })
          }
        </div>
        <button onClick={this.onStartClick}>Start</button>
        <button onClick={this.onStopClick}>Stop</button>
        <button onClick={this.onResetClick}>Reset</button>
        <button onClick={this.onRandomClick}>Random</button>
        <input type="range" min="1" max="100" onInput={this.onChangeRange}/>
      </div>
    );
  }
}

export default Grid;