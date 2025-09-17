import "./Pokemon.css"
import { PokemonCard } from "./PokemonCard.jsx";
import { useEffect, useState } from "react";

export const Pokemon = () =>
{
    const API = "https://pokeapi.co/api/v2/pokemon?limit=200";

    const [PokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchPokemon = async () =>
    {
        try
        {
            const res = await fetch(API);
            const data = await res.json();

            const finalPokemonData = data.results.map(async (Pokemon) =>
            {
                const res = await fetch(Pokemon.url)
                const data = await res.json();
                return data;
            })
        const detailedResponse = await Promise.all(finalPokemonData);
        console.log(detailedResponse);
        setPokemonData(detailedResponse);
        setLoading(false);
        }
        catch (error)
        {
            console.log(error);
            setError("Something went wrong");
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchPokemon();

    },[]);

    if(loading)
    {
        return <h1 className="Loading">Loading...</h1>
    }
    if(error)
    {
        return <h1 className="Error">{error.message}</h1>
        
    }
    return(
        <section className = "Container">
            <header className="Header">
                <h1>Pokemon Cards</h1>
            </header>
            <div className="Card-Container">
                <ul className="Card-List">
                    {PokemonData.map((curPokemon) =>
                    {
                        return <PokemonCard key={curPokemon.id} PokemonData={curPokemon} />;
                    })}
                </ul>
            </div>
        </section>
    );
}