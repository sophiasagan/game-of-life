import React from "react";
import { setPattern } from "./patterns";
import { getGrid } from "../utils/utils";
import { generateRandomGrid } from "../utils/utils";
import Button from "../Buttons/Button";
import { FaRandom } from "react-icons/fa";

const PatternInfo = ({ setGrid, setGeneration }) => {
    const addGlider = () => {
        setGeneration(0);
        setGrid(setPattern("glider"));
    };

    const addPulsar = () => {
        setGeneration(0);
        setGrid(setPattern("pulsar"));
    };

    const addGun = () => {
        setGeneration(0);
        setGrid(setPattern("gliderGun"));
    };

    const addSnark = () => {
        setGeneration(0);
        setGrid(setPattern("snark"));
    };

    const addThunderBird = () => {
        setGeneration(0);
        setGrid(setPattern("thunderBird"));
    };

    const addQueenBee = () => {
        setGeneration(0);
        setGrid(setPattern("queenBee"));
    };

    const addRabbits = () => {
        setGeneration(0);
        setGrid(setPattern("rabbits"));
    };

    const addDieHard = () => {
        setGeneration(0);
        setGrid(setPattern("dieHard"));
    };

    const addGlasses = () => {
        setGeneration(0);
        setGrid(setPattern("glasses"));
    };

    const addBob = () => {
        setGeneration(0);
        setGrid(setPattern("bob"));
    };

    const addCastle = () => {
        setGeneration(0);
        setGrid(setPattern("castle"));
    };

    const addDragon = () => {
        setGeneration(0);
        setGrid(setPattern("dragon"));
    };

    const home = () => {
        setGeneration(0);
        setGrid(getGrid("home"));
    };

    const random = () => {
        setGeneration(0);
        setGrid(generateRandomGrid());
    };

    return (
        <div className="patternInfo">
           
            <h3>Patterns</h3>
            <Button className="pattInfo" onClick={addPulsar}>
                Pulsar
            </Button>
            <Button className="pattInfo" onClick={addGlider}>
                Glider
            </Button>
            <Button className="pattInfo" onClick={addSnark}>
                Snark
            </Button>
            <Button className="pattInfo" onClick={addDieHard}>
                DieHard
            </Button>
            <Button className="pattInfo" onClick={addCastle}>
                Castle
            </Button>
            <Button className="pattInfo" onClick={addThunderBird}>
                Thunderbird
            </Button>
            <Button className="pattInfo" onClick={addQueenBee}>
                Queen Bee
            </Button>    
            <Button className="pattInfo" onClick={addRabbits}>
                Rabbits
            </Button>  
            <Button className="pattInfo" onClick={addGlasses}>
                Glasses
            </Button> 
            <Button className="pattInfo" onClick={addBob}>
                Bob
            </Button>           
            <Button className="pattInfo" onClick={addGun}>
                Glider Gun
            </Button>
            <Button className="pattInfo" onClick={addDragon}>
                Dragon
            </Button>
            <Button className="pattInfo" onClick={home}>
                Home
            </Button>
            <Button className="pattInfo" onClick={random}>
                <FaRandom className="" />
                Random
            </Button>
            
        </div>
    );
};

export default PatternInfo;