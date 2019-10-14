import React, {useState} from "react";
// import axios from 'axios';
import PlayerCard from "./PlayerCard";
import {useLocalStorage} from "./utils/useLocalStorage";


export default function PlayersList(props) {

    const [country, setCountry] = useLocalStorage("country", "all");
    const [filtered, setFiltered] = useState(false);

    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:5000/api/players/${country}`)
    //         .then(result => {
    //             setCountry({
    //             players: result.data
    //             })
    //         })
    //         .catch(error => {
    //             console.log("Error:", error)
    //         })
    // }, [country])

    const changeValue = (event) =>{
        event.preventDefault()

        setFiltered(!filtered)
    }


    return(
        <div>
            <h2>Choose the country</h2>

            <select value={country} onChange={e => setCountry(e.target.value)}>
                <option value="all">All</option>
                <option value="united states">United States</option>
                <option value="brazil">Brazil</option>
                <option value="france">France</option>
                <option value="sweden">Sweden</option>
                <option value="netherlands">Netherlands</option>
                <option value="australia">Australia</option>
                <option value="chile">Chile</option>
                <option value="england">England</option>
                <option value="italy">Italy</option>
                <option value="germany">Germany</option>
                <option value="canada">Canada</option>
                <option value="spain">Spain</option>
                <option value="norway">Norway</option>
                <option value="argentina">Argentina</option>
            </select>

            <button value={filtered} onClick={changeValue}>Show only this country! </button>

            {props.data.map((player) =>{
                if (filtered) {
                if (player.country.toLowerCase() === country) {
                    return <PlayerCard key={player.name} player={player} />
                }
            }else{
                    return <PlayerCard key={player.name} player={player} />
                }
            })}
        </div>
    )
}