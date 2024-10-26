'use client'

import PageLoader from "@/components/PageLoader";
import game from "../../../json/games.json";
import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import SmileyAINavbar from '../../../components/Common/SmileyAINav'
import SmileyAIBottomNav  from '../../../components/Common/BottomNav'

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
      <SmileyAINavbar title="- Games" />
      {mrGame ? (
        <div className="flex justify-center sm:mt-4 mb-20">
          <div className="w-50 mx-auto shadow-xl p-3">
            <a href={mrGame.url} target="_blank" className="flex justify-center">
              <img
                src={mrGame.assets.cover}
                className="rounded-lg cursor-pointer"
                alt="games"
              />
            </a>
            <div className="mt-3">
              <h5 className="text-lg">{mrGame.name.en}</h5>
              <p className="">{mrGame.description.en}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={mrGame.url}
                  target="_blank"
                  className="p-2 text-center rounded-lg cursor-pointer btn-orange-moon px-5 w-full h-12"
                >
                  Play Game
                </a>
                <a
                  href={`https://wa.me/?text=${shareText}`}
                  target="_blank"
                  className="p-2 text-center rounded-lg cursor-pointer btn-green-moon px-5 w-full h-12"
                >
                  Share Game
                </a>
                <div className="flex justify-center align-center">
                  <img src="/images/online.png" width={20} height={20} className="w-5 h-5" />
                  <div className="text-green-500 font-bold px-1 sm:w-60">
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
      <SmileyAIBottomNav />
    </main>
  );
};

export default UniqueGames;
