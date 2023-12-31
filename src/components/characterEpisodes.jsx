import { useState } from "react";
import ArrowUpCircleIcon from "../assets/icons/arrowUpCircleIcon";
import ArrowDownCircleIcon from "../assets/icons/arrowDownCircleIcon";

function CharacterEpisodes({ episodes }) {
  const [sortBy, setSortBy] = useState(true);

  let sortedEpisode;

  if (sortBy) {
    sortedEpisode = [...episodes].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sortedEpisode = [...episodes].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }

  return (
    <div className="w-100  bg-slate-800 rounded-xl mt-5 p-3 ">
      <div className="w-100 flex justify-between whitespace-nowrap mb-1">
        <h2 className="text-slate-500 font-semibold sm:text-lg tracking-widest">
          List of Episodes:
        </h2>
        <button className="" onClick={() => setSortBy((is) => !is)}>
          {sortBy ? (
            <ArrowUpCircleIcon
              color="#f9fafb"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          ) : (
            <ArrowDownCircleIcon
              color="#f9fafb"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          )}
        </button>
      </div>
      <ul className="text-white/80 whitespace-nowrap">
        {sortedEpisode.map((item, index) => {
          return (
            <li
              className="flex justify-between mt-3  text-[.7rem] md:text-xs "
              key={item.id}>
              <div>
                {String(index + 1).padStart(2, "0")} - {item.episode}
                <strong>{item.name}</strong>
              </div>
              <div className="bg-slate-500/60 rounded-xl py-1 px-3 text-[.5rem]  md:text-[.7rem]">
                {item.air_date}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharacterEpisodes;
