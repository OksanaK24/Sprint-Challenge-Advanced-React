import React from 'react'
import Player from "./Player"
import {useLocalStorage} from "../hooks/useLocalStorage"
import {Grid , Container } from "@material-ui/core"


function Players( {players} ) {
    const [bestPlayers , setBestPlayer] = useLocalStorage('best' , [])
    console.log("this is player" , players)
    return (
        <>
        <div>
        <h1 style={{margin:40}}>Women's World Cup Players</h1>

        </div>
         <Container>
         <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                {
                players.map(player => <Player player={player.name} /> )
               }
                
                </Grid>
             </Grid>

         </Container>
        </>
    )
}

export default Players
