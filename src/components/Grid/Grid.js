import React from "react";
import Cell from "../Cell/Cell";

const Grid = (props) => {
    return (
        <div className="grid">
            {props.golGrid.map((rows, row_index) =>
                rows.map((col, col_index) => (
                    <Cell
                        key={`${row_index} - ${col_index}`}
                        golGrid={props.golGrid}
                        row_index={row_index}
                        col_index={col_index}
                        setGrid={props.setGrid}
                        isRunning={props.isRunning}
                    />
                ))
            )}
        </div>
    );
};

export default Grid;