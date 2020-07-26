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
      <main>
        <Grid />
        <AboutCarousel />
      </main>
    </div>
  );
}


export default App;
