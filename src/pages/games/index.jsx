"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer";
import GameSlider from "../../components/Games/GameSlider";
import GameSection from "../../components/Games/GameSection";
import GameNavbar from "../../components/Games/GameNav";

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
    <main className="bg-light">
        <GameNavbar />
      <GameSlider />
      <GameSection data={gameConfig[1]} />
      <Footer />
    </main>
  );
}
