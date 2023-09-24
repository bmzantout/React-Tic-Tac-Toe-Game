import React from "react";
import { Box } from "./Box";
import "./Board.css"


export const Board = ({board_list, onClick}) =>{

    return(
        <div className="board">
            {board_list.map ((value, idx) => {

                return <Box value = {value} onClick= {() => value === null && onClick(idx)} /> // call the onClick function and pass the index in which it has been run 
            })                              
            }

           </div>
    )
}