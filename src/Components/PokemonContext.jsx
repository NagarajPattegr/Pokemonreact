import {  createContext, useContext,useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({children}) =>{
    const [pokemon, setPokemon] = useState([]);
      const [pokemonlist,setList] = useState([]);
      const [isLoading, setLoading] = useState(true);
      const [search,setSearch] = useState("");
    return (
        <PokemonContext.Provider value={{pokemon,setPokemon,pokemonlist,setList,isLoading,setLoading,search,setSearch}}>{children}</PokemonContext.Provider>
    );
}

export function usePokemon(){
    const data = useContext(PokemonContext);
    console.log(data)
    return data;
}
