import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./Modal";

type EpisodesType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
};

export function ListEpisodes() {
  const [episodes, setEpisodes] = useState<EpisodesType[]>([]);
  const [open, setOpen] = useState(false)
  function carregarEpisodes() {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => setEpisodes(res.data.results));
  }
  useEffect(() => {
    carregarEpisodes();
    console.log(episodes);
  }, []);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center"></div>
      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Air date
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Episode
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Ver Personagens</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {episodes.map(
              (
                { id, name, air_date, episode, characters}: EpisodesType,
                planIdx
              ) => (
                <tr key={id}>
                  <td
                    className={classNames(
                      planIdx === 0 ? "" : "border-t border-transparent",
                      "relative py-4 pl-4 sm:pl-6 pr-3 text-sm"
                    )}
                  >
                    <div className="font-medium text-gray-900">{name}</div>
                    <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                      {episode}
                    </div>
                    {planIdx !== 0 ? (
                      <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" />
                    ) : null}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? "" : "border-t border-gray-200",
                      "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                    )}
                  >
                    {air_date}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? "" : "border-t border-gray-200",
                      "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                    )}
                  >
                    {episode}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? "" : "border-t border-transparent",
                      "relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium"
                    )}
                  >
                    {/* <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                      onClick={()=>setOpen(!open)}
                    >
                      <Modal open={open} setOpen={setOpen} characters={characters}/>
                      Ver Personagens
                    </button> */}
                    {planIdx !== 0 ? (
                      <div className="absolute right-6 left-0 -top-px h-px bg-gray-200" />
                    ) : null}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
