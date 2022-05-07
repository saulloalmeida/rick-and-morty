import axios from "axios";
import { useEffect, useState } from "react";

type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
};
export function ListCharacters() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  function carregarCharacters() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }
  useEffect(() => {
    carregarCharacters();
  }, []);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {characters.map(
        ({ id, name, status, species, image, gender }: CharacterType) => (
          <li
            key={id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                src={image}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">{name}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only"></dt>
                <dd className="text-gray-500 text-sm">{name}</dd>
                <dt className="sr-only"></dt>
                <dd className="mt-3">
                  {status === "Alive" ? (
                    <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {status}
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-red-700 text-xs font-medium bg-red-300 rounded-full">
                      {status}
                    </span>
                  )}
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <div className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                    <span className="ml-3">{gender}</span>
                  </div>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <div className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                    <span className="ml-3">{species}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
}
