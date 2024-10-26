import { useState, useEffect } from "react";
import game from "../../json/games.json";
import Link from "next/link";
import PageLoader from "../PageLoader"

const GameSection = (props) => {
    const [mainGame, setMainGame] = useState([]);

    const initializeGames = () => {
        if (props.data.slug) {
            const groupCategory = game.games.filter((g) => {
                if (g.categories.en[0] == props.data.slug) {
                    return g;
                }
            });

            const maxPlayers = groupCategory.sort((a, b) => {
                return b.gamePlays - a.gamePlays;
            });

            const slicedGames = maxPlayers.slice(0, 4);
            setMainGame(slicedGames);
        }
    };

    const mostPlayedGames = () => {
        const filteredGames = game.games.filter((g) => {
            return g.gamePlays > 1000000;
        });
        const maxPlayers = filteredGames.sort((a, b) => {
            return b.gamePlays - a.gamePlays;
        });
        setMainGame(maxPlayers);
    };

    useEffect(() => {
        // initializeGames();
        mostPlayedGames();
    }, []);
    return (
        <div>
            <div className={`flex justify-center px-2 py-3`}>
                <img src="./images/coin.png" className="p-2" alt="coin"></img>
                <div className="font-bold text-lg">Most Played</div>
            </div>
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 mb-2 px-1">
                    {mainGame.length ? (
                        mainGame.map((g, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex justify-center p-1"
                                >
                                    <div
                                        className={`shadow-xl mt-3 rounded-lg bg-white flex flex-col`}
                                    >
                                        <div className="pt-2 font-bolder text-center rounded-b">
                                            {g.name.en}
                                        </div>
                                        <Link href={`/games/${g.code}`}>
                                            <img
                                                src={g.assets.cover}
                                                className="p-2 rounded-xl"
                                                alt={g.name.en}
                                            ></img>
                                        </Link>
                                        <div className="flex flex-col justify-center pt-2">
                                            <a
                                                className={` zoom-in-out-box mx-3 text-white p-1 rounded-lg text-center ${props.data.buttonClass}`}
                                                href={g.url}
                                                target="blank"
                                            >
                                                Start Game
                                            </a>

                                            <div className="flex justify-center items-center my-2">
                                                <img
                                                    src="./images/online.png"
                                                    width={15}
                                                    height={15}
                                                    alt="online"
                                                    className="w-4 h-4 rounded-full"
                                                ></img>
                                                <div className="text-green-500 font-bold px-1">
                                                    {Math.floor(g.gamePlays / 10000)} Users
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div style={{ height: "calc(100vh - 408px)" }} className="flex justify-center items-center w-full col-span-4">
                            <PageLoader />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameSection;
