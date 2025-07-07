export default function PokemonCard({key,data}){
    return(
        <li className="w-[90%] sm:w-sm flex flex-col bg-white border-2 border-black rounded-2xl text-black items-center gap-2 p-3 font-bold" key={key}>
            <img src={data.sprites.front_default} alt="image" className="w-xl h-64 border-black border-b-2"/>
            <p className="bg-green-500 p-2 rounded-2xl">{
                data.types.map(type=>type.type.name).slice(0,1).join(", ")
                }</p>
            <p className="text-2xl md:text-4xl ">{data.name}</p>
            <div className="w-full flex sm:flex-row flex-col sm:justify-between items-center">
            <div><p>Height : {data.height}</p>
            <p>Weight : {data.weight}</p></div>
           <div> <p>Speed : {data.stats[5].base_stat}</p>
            <p>HP : {data.stats[0].base_stat}</p></div>
            </div>
        </li>
    )
}