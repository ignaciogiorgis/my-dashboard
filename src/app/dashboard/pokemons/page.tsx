import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 151,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  const pokemonsList = data.results.map((pokemon: any) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  //throw new Error("este error no deberia suceder")
  // throw notFound();
  return pokemonsList;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div className="flex flex-col">
      <span className="text-5xl mr-2">
        Pokemons List <small>Static</small>
      </span>
      <div>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}
