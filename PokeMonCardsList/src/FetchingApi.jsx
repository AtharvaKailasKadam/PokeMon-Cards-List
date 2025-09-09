import { useEffect, useState } from "react"
import "./FetchingApi.css"

export const FetchingApi = () => {

    const [Pokemon, setPokemon] = useState(null);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const fetchPokemon=() =>
    {
        fetch(API)
        .then((res)=> res.json())
        .then((data) => {
            setPokemon(data);
            setLoading(false);
        })
        .catch((error) => {console.log(error);setError(error); setLoading(false)});
    }
    useEffect(()=>{
        fetchPokemon();
    },[]);

    console.log(Pokemon);

    if(Loading)
    {
        return <h1>Loading...</h1>
    }

    if(Error)
    {
        <div>
            <h1>Error : {Error.message}</h1>
        </div>
    }
    if(Pokemon)
    {
        return (
            <section className="Container">
                <header>
                    <h1>Lets Catch Pokemon,..!</h1>
                </header>
                <ul className="Card-demo">
                    <li className="Pokemon-card">
                        <figure>
                            <img src = {Pokemon.sprites.other.dream_world.front_default} alt = {Pokemon.name} className = "Pokemon-Image" />
                        </figure>
                        <figure>
                            <h2>{Pokemon.name.toUpperCase()}</h2>
                            <div className="grid-three-cols">
                                <p className="Pokemon-info">
                                    Height: <span>{Pokemon.height}</span>
                                </p>
                                <p>
                                    Weight: <span>{Pokemon.weight}</span>
                                </p>
                                <p>
                                    Speed: <span>{Pokemon.stats[5].base_stat}</span>
                                </p>
                            </div>

                        </figure>
                    </li>
                </ul>
            </section>
        )
    }
}
