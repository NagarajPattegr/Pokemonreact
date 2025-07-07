import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Cards from "./Components/Cards";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonlist,setList] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [search,setSearch] = useState("")

  async function apiData() {
    try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
        const response = await data.json();

        const pokemonList = response.results.map(async (char) => {
          const res = await fetch(char.url);
          const data = res.json();
          return data;
        });

        const pokemonData = await Promise.all(pokemonList);

        setPokemon(pokemonData);
        setList(pokemonData)
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
        alert(err.message)
      }
  }
  useEffect(() => {
    apiData();
  }, []);

  useEffect(()=>{
        async function onInputChange() {
          const seaechPokemon = pokemon.filter(pk=>pk.name.toLowerCase().includes(search.toLowerCase()))
          console.log(seaechPokemon)
          setList(seaechPokemon)
        }
        onInputChange()
  },[search])

  console.log(pokemon);

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-slate-950">
      <Header />
        <div className="w-full h-fit flex justify-center mt-5">
          <input type="text" 
          className="w-[90%] sm:w-md bg-white h-14 rounded-2xl text-xl"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search pokemon"
          />
        </div>
      {
      }
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-20 w-full overflow-auto">
          <Cards pokemon={pokemonlist}/>
        </div>
      )}

    </div>
  );
}

export default App;
