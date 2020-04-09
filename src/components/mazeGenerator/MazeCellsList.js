import React, {useState, useEffect} from "react";
import axios from 'axios';

const MazeCellsList = props => {
    const [cells, setCells] = useState([]);
    const [startCell, setStartCell] = useState(null);
    const [finishCell, setFinishCell] = useState(null);

    // useEffect(() => {
    //     console.log("Send request...");
    //     axios.get(`https://localhost:44328/api/maze/generator/${props.mazeType}_row=${props.row}&&column=${props.column}`)
    //         .then(response => {
    //             const {Cells, StartCell, FinishCell} = response.data;
    //             setCells(Cells);
    //             setStartCell(StartCell);
    //             setFinishCell(FinishCell);
    //         });
    // }, [props.mazeType, props.row, props.column]);

    useEffect(() => {
        console.log("Send request...");
            axios.get(`https://localhost:44328/api/maze/generator/normal_row=3&&column=3`)
                .then(response => {
                    const {Cells, StartCell, FinishCell} = response.data;
                    setCells(Cells);
                    setStartCell(StartCell);
                    setFinishCell(FinishCell);
                });
    }, []);

    console.log(startCell, finishCell, cells);
    return <div>
        <div>MazeCellList</div>
        {cells.map(row => row.map(cell => <p>{cell.X_Position}</p>))}
    </div>
};

export default MazeCellsList;