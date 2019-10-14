import React from "react";

export default function PlayerCard(props) {
    return(
        <div>
            <h3>{props.player.name}</h3>
            <p>{props.player.country}</p>
            <p>{props.player.searches}</p>
        </div>
    )
}