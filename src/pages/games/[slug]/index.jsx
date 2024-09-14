'use client'

import GameNav from "../../../components/Games/GameNav"
import PageLoader from "@/components/PageLoader";
import game from "../../../json/games.json";
import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const UniqueGames = () => {
  const [slug, setSlug] = useState("HJP4afkvqJQ")
  const params = useParams()
  const gameJson = game.games;

  const currentGame = gameJson.filter((game) => {
    return game.code === slug;
  });
  const mrGame = currentGame.length ? currentGame[0] : [];

  const text = `Play this amazing game with me`;
  const newLine = "\n";
  const shareText = encodeURIComponent(
    `Hai,${newLine}*${
      mrGame.name.en || "Smiley"
    } Game*${newLine}${text}${newLine}${newLine}https://www.freeappmaker.pro/games/${
      mrGame.code
    }`
  );

  useLayoutEffect(() => {
    if (params?.slug) {
      setSlug(params.slug)
    }
  },[params])

  return (
    <main>
      <GameNav />
      {mrGame ? (
        <div className="flex justify-center mt-5 mt-1">
          <div className="w-50 mx-auto shadow-xl p-3">
            <a href={mrGame.url} target="_blank">
              <img
                src={mrGame.assets.cover}
                className="rounded-lg cursor-pointer"
                alt="games"
              />
            </a>
            <div className="mt-3">
              <h5 className="text-lg">{mrGame.name.en}</h5>
              <p className="">{mrGame.description.en}</p>
              <div className="flex sm:flex-row flex-col">
                <a
                  href={mrGame.url}
                  target="_blank"
                  className="p-2 rounded-lg cursor-pointer btn-orange-moon px-5"
                >
                  Play Game
                </a>
                <a
                  href={`https://wa.me/?text=${shareText}`}
                  target="_blank"
                  className="p-2 rounded-lg cursor-pointer btn-green-moon my-2 px-5"
                >
                  Share Game
                </a>
                <div className="flex justify-center align-center my-2 mx-5">
                  <img src="/images/online.png" width={20} height={20}></img>
                  <div className="text-green-500 font-bold px-1">
                    {Math.floor(mrGame.gamePlays)} Users
                  </div>
                </div>
              </div>
              {/* <div className="mt-5">{mrGame.assets.square}</div> */}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <PageLoader />
        </div>
      )}
    </main>
  );
};

export default UniqueGames;
