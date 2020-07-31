import React from "react";
import { setPattern } from "./patterns";
import { getGrid } from "../utils/utils";
import { generateRandomGrid } from "../utils/utils";
import Button from "../Buttons/Button";
import { FaRandom } from "react-icons/fa";
import { Dropdown, DropdownButton } from 'react-bootstrap';

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

    const life = () => {
        setGeneration(0);
        setGrid(getGrid("life"));
    };

    const random = () => {
        setGeneration(0);
        setGrid(generateRandomGrid());
    };

    return (
        <div className="patternInfo">
            <DropdownButton id="dropdown-basic-button" title="Patterns">
            {/* <h3>Figures</h3> */}
            <Dropdown.Item className="pattInfo" onClick={addPulsar}>
                Pulsar
            </Dropdown.Item>
            <Dropdown.Item className="pattInfo" onClick={addGlider}>
                Glider
            </Dropdown.Item>
            <Dropdown.Item className="pattInfo" onClick={addSnark}>
                Snark
            </Dropdown.Item>
            <Dropdown.Item className="pattInfo" onClick={addGun}>
                Glider Gun
            </Dropdown.Item>
            <Dropdown.Item className="pattInfo" onClick={life}>
                Life
            </Dropdown.Item>
            <Dropdown.Item className="pattInfo" onClick={random}>
                <FaRandom className="" />
                Random
            </Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default PatternInfo;