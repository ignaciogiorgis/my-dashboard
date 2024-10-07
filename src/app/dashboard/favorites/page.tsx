import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = () => {
  title: "favoritos";
  description: "favoritos de la pagina que estamos creado";
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl mr-2">
        Pokemons Favorites{" "}
        <small className="text-blue-800"> global Static</small>
      </span>
      <div>
        <PokemonGrid pokemons={[]} />
      </div>
    </div>
  );
}
