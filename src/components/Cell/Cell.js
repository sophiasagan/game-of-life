import React from "react";

const Cell = ({ golGrid, row_index, col_index, setGrid, isRunning }) => {
    const handleClick = () => {
        if (isRunning) {
            return;
        }
        let newGrid = [...golGrid];
        newGrid[row_index][col_index] = golGrid[row_index][col_index] ? 0 : 1;
        setGrid(newGrid);
    };

    return (
        <>
            <div
                onClick={handleClick}
                className={`cell ${
                    golGrid[row_index][col_index] ? "alive" : "dead"
                }`}
            />
        </>
    );
};

export default Cell;