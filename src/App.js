import React from "react";
import Grid from './components/Grid/Grid';
import AboutCarousel from './Carousel/Carousel'
import './App.css';


function App(){
 
  return (
    <div className="App">
      <header className="App-header">
        "Conway's Game of Life"
      </header>
      <main className = "App-Container">
        <div className = "Grid">
        <Grid />
        </div>
        <div className = "AboutCarousel">
        <AboutCarousel />
        </div>
      </main>
    </div>
  );
}


export default App;
