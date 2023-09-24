import React from "react";
import "./ScorePanel.css"

export const ScorePanel = ({scores, player_X}) =>{

    const {Score_X, Score_O} = scores;

    return <div className="scorepanel">

        <span className= {`score x-score ${!player_X && "inactive"}`} >X-score: {Score_X}</span>
        <span className= {`score o-score ${player_X && "inactive"}`} >O-score: {Score_O}</span>

        </div>
}