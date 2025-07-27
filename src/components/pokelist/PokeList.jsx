import { useState } from "react";
import usePokemonFetch from "./usePokemonFetch";
import Card from "../cards/Card";
import { useNavigate } from "react-router";
import "./Pokelist.css";

function getPokemonIdFromUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 2];
}

const PokeList = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const navigateTo = useNavigate();

  const {
    pokemonJsonObject,
    isLoading,
    hasError,
    error
  } = usePokemonFetch(offset, limit);

  return (
    <div className="poke-list p-6 text-center">
      <h2 className="text-3xl font-pixel text-indigo-800 mb-6">Pokédex</h2>

      {!isLoading && !hasError && pokemonJsonObject?.results && (
        <>
          <section className="card-holder">
            {pokemonJsonObject.results.map((p) => {
              const id = getPokemonIdFromUrl(p.url);
              const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
              return (
                <Card
                  key={id}
                  imgUrl={imgUrl}
                  title={p.name}
                  description=""
                  actionLabel="Go to Details"
                  action={() => {
                    navigateTo(`/pokelist/${id}`);
                  }}
                />
              );
            })}
          </section>

          <div className="mt-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOffset(offset + 20);
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </>
      )}

      {hasError && (
        <strong className="text-red-600 font-semibold">
          Algo salió mal y no se puede cargar la Pokédex.
        </strong>
      )}
    </div>
  );
};

export default PokeList;
