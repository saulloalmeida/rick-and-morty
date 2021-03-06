import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ListCharacters } from "./components/ListCharacters";
import { ListEpisodes } from "./components/ListEpisodes";
import { ListLocations } from "./components/ListLocations";

const itemsNavigation = [
  { name: "Characters", href: "/characters", current: false },
  { name: "Locations", href: "/locations", current: false },
  { name: "Episodes", href: "/episodes", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function App() {
  const [navigation, setNavigation] = useState(itemsNavigation);


  return (
    <>
      <div className="min-h-full">
        <div className="bg-[#FAE48BFF] pb-32">
          <Disclosure
            as="nav"
            className="bg-[#24325FFF] border-b border-indigo-300 border-opacity-25 lg:border-none"
          >
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                <div className="px-2 flex items-center lg:px-0">
                  <div className="flex-shrink-0">
                    <img
                      className="block h-8 w-8 rounded-full"
                      src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                      alt="Workflow"
                    />
                    
                  </div>
                  <div className="lg:block lg:ml-10">
                    <div className="flex space-x-4">
                      {navigation.map((item, index) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-indigo-700 text-white"
                              : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                            "rounded-md py-2 px-3 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden flex-1 px-2 md:flex justify-center lg:ml-6 lg:justify-end">
                  {/* <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </Disclosure>
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white"></h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <Routes>
                <Route path="characters" element={<ListCharacters />} />
                <Route path="episodes" element={<ListEpisodes />} />
                <Route path="locations" element={<ListLocations />} />
              </Routes>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
