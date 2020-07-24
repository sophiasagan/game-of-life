import React from "react";
import Grid from './components/Grid/Grid';
import './App.css';


function App(){
 
  return (
    <div className="App">
      <header className="App-header">
        "Conway's Game of Life"
      </header>
      <main>
        <Grid />
        
      </main>
    </div>
  );
}


export default App;
