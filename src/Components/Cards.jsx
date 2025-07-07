import PokemonCard from "./PokemonCard";
export default function Cards({pokemon}){
    return (
        <ul className="text-2xl text-white flex flex-wrap h-full w-full justify-center gap-2 px-4">
            {pokemon.map((pk) => {
              return <PokemonCard key={pk.id} data={pk}></PokemonCard>;
            })}
          </ul>
    )
}