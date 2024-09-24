import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

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
  return pokemonsList;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div className="flex flex-col ">
      <div className="flex flex-wrap col-10 items-center justify-center ">
        {pokemons.map((pokemon) => (
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />
        ))}
      </div>
    </div>
  );
}
