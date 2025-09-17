export const PokemonCard = ({PokemonData}) =>
{
    return(
        <li className="Card-Item">
            <figure>
                <div className="Image-Container-Border">
                    <img src ={PokemonData.sprites.other.dream_world.front_default} alt={PokemonData.name}className = "Pokemon-Image"/>
                </div>
                <figcaption>
                    <h2 className="Pokemon-Name">{PokemonData.name}</h2>
                </figcaption>
                <div className="Pokemon-Type">
                        {PokemonData.types.map((typeInfo) => (   <p key={typeInfo.type.name} className={`type-${typeInfo.type.name}`}>{typeInfo.type.name}</p>))}
                </div>
                <div className="Pokemon-Details">
                    <p className="Pokemon-Info">Height: <span>{PokemonData.height}</span> cm</p>
                    <p className="Pokemon-Info">Weight: <span>{PokemonData.weight}</span> kg</p>
                    <p className="Pokemon-Info">Speed: <span>{PokemonData.stats[5].base_stat}</span></p>
                    <p className="Pokemon-Info">HP: <span>{PokemonData.stats[0].base_stat}</span></p>
                    <p className="Pokemon-Info">Attack: <span>{PokemonData.stats[1].base_stat}</span></p>
                    <p className="Pokemon-Info">Defense: <span>{PokemonData.stats[2].base_stat}</span></p>
                    <p className="Pokemon-Info">Special Attack: <span>{PokemonData.stats[3].base_stat}</span></p>
                    <p className="Pokemon-Info">Special Defense: <span>{PokemonData.stats[4].base_stat}</span></p>
                    <p className="Pokemon-Info">Abilities: {PokemonData.abilities.map((abilityInfo) => (   <div key={abilityInfo.ability.name} className={`ability-${abilityInfo.ability.name}`}>{abilityInfo.ability.name}</div>))}</p>
                </div>
            </figure>
        </li>
    )
}