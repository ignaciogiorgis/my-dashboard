"use client";
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { useAppSelector } from "@/store";

const PokemonGridFavorites = () => {
  const favoritesPokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  return (
    <div>
      <PokemonGrid pokemons={favoritesPokemons} />
    </div>
  );
};

export default PokemonGridFavorites;
