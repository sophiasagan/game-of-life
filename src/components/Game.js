import React, { useState, useRef, useCallback } from "react";
import { createGrid, nextGrid } from "./utils/utils";
import { getGrid } from "./utils/utils";
import Grid from "./Grid";
import Controls from "./Controls/Controls";
import Presets from "./Patterns/PatternInfo";
// import About from "./About";
import Footer from "./About/Footer";

const Game = () => {
    const [golGrid, setGrid ] = useState(() => {
        return getGrid("life");
    });
    const [generation, setGeneration] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [speed, setSpeed] = useState(50);

    const isRunningRef = useRef();
    const generationRef = useRef();
    const speedRef = useRef();

    const cellSide = 0;

    isRunningRef.current = isRunning;
    generationRef.current = generation;
    speedRef.current = speed;

    // Main simulation function
    const start = useCallback(() => {
        // Breaks loop
        if (!isRunningRef.current) {
            return;
        }

        setGrid ((currentGrid) => {
            return nextGrid(currentGrid);
        });
        setGeneration(generationRef.current + 1);
        setTimeout(start, speedRef.current);
    }, []);

    const pause = () => {
        setIsRunning(!isRunning);
        if (!isRunning) {
            isRunningRef.current = true;
            start();
        }
    };

    const clear = () => {
        setGeneration(0);
        setGrid (createGrid());
        if (isRunning) {
            setIsRunning(false);
        }
    };

    const next = () => {
        setGrid ((currentGrid) => {
            return nextGrid(currentGrid);
        });
        setGeneration(generationRef.current + 1);
    };

    const changeSpeed = (speed) => {
        switch (speed) {
            case "faster": {
                if (speedRef.current > 200) {
                    return setSpeed(speedRef.current - 200);
                } else if (speedRef.current <= 100 && speedRef.current >= 50) {
                    return setSpeed(speedRef.current - 50);
                } else {
                    return setSpeed((speedRef.current = 10));
                }
            }
            case "slower": {
                if (speedRef.current < 3000) {
                    return setSpeed(speedRef.current + 100);
                } else {
                    return setSpeed((speedRef.current = 1100));
                }
            }
            default:
                break;
        }
    };

    return (
        <div className="screen">
            <div className="mobile-container">
                <h1>John Conway's Game of Life</h1>
                <div className="game-container">
                    <div className="game">
                        
                        <Grid
                            golGrid={golGrid}
                            setGrid ={setGrid}
                            isRunning={isRunning}
                        />
                        <Controls
                            isRunning={isRunning}
                            pause={pause}
                            clear={clear}
                            next={next}
                            changeSpeed={changeSpeed}
                        />
                        <h4 className="generation">Generation: {generation}</h4>
                    </div>
                    <Presets
                        setGrid ={setGrid }
                        setGeneration={setGeneration}
                    />
                </div>
            </div>
            {/* <About /> */}
            <Footer />
        </div>
    );
};

export default Game;