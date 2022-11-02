import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { moreInfos } from "../data";

export default function MoreInfo() {
  return (
    <section id="moreInfo">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          More about me
        </h1>
        <div className="flex flex-wrap m-4">
          {moreInfos.map((moreInfo) => {
            return moreInfo.duration ?
            <span
            key={moreInfo.image}
            className="sm:w-1/2 w-80 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-500 h-300 object-cover object-center"
                src={moreInfo.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <h1 className="sm:text-2xl text-2xl font-small title-font text-grey mb-8">{moreInfo.name}</h1>
                <p className="sm:text-1xl text-2xl mb-6" >Period: {moreInfo.duration}</p>
                <p className="sm:text-1xl text-2xl">Specialization: {moreInfo.specialization}</p>
              </div>
              </div>
            </div>
          </span>
            :
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <h1 className="sm:text-2xl text-2xl font-small title-font text-grey mb-8">{moreInfo.name}</h1>
              </div>
            </div>

          })}
        </div>
      </div>
    </section>
  );
}
