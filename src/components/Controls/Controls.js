import React from "react";
import Button from "../Buttons/Button";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { BsSkipForward, BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import { AiOutlineClear } from "react-icons/ai";

const Controls = ({ isRunning, pause, clear, next, changeSpeed }) => {
    return (
        <div className="controls">
            <div className="main">
                <Button className="control" onClick={pause}>
                    {isRunning ? <FaRegPauseCircle /> : <FaRegPlayCircle />}
                </Button>
                {isRunning ? null : (
                    <>
                        <Button className="control" onClick={clear}>
                            <AiOutlineClear />
                        </Button>
                        <Button className="control" onClick={next}>
                            <BsSkipForward />
                        </Button>
                    </>
                )}
            </div>
            <div className="speed">
                <Button
                    className="control"
                    onClick={() => changeSpeed("slower")}
                >
                    <FiMinusCircle />
                </Button>
                <p>Speed</p>
                <Button
                    className="control"
                    onClick={() => changeSpeed("faster")}
                >
                    <BsPlusCircle />
                </Button>
            </div>
        </div>
    );
};

export default Controls;