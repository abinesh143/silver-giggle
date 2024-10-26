"use client";

import GameSlider from "../../components/Games/GameSlider";
import GameSection from "../../components/Games/GameSection";
import SmileyAIBottomNav from "../../components/Common/BottomNav";
import SmileyAINavbar from "../../components/Common/SmileyAINav";

export default function SmileyGames() {

  const gameConfig = [
    {
      name: "Play Arcade Games",
      buttonClass: "btn-green-moon",
      slug: "Arcade",
    },
    {
      name: "Play Action Games",
      buttonClass: "btn-dark-moon",
      slug: "Action",
    },
    {
      name: "Sports and Racing",
      buttonClass: "btn-funky-moon",
      slug: "Sports & Racing",
    },
    {
      name: "Play Strategy Games",
      buttonClass: "btn-purple-moon",
      slug: "Strategy",
    },
    {
      name: "Puzzle and Logic",
      buttonClass: "btn-cool-blues",
      slug: "Puzzle & Logic",
    },
    {
      name: "Play Adventure Games",
      buttonClass: "btn-orange-moon",
      slug: "Adventure",
    },
  ];


  return (
    <main className="">
      <SmileyAINavbar title="- Games" />
      <section className="bg-light container sm:mx-auto">
        <GameSlider />
        <GameSection data={gameConfig[1]} />
      </section>
      <SmileyAIBottomNav />
    </main>
  );
}
