import { useState, useEffect } from "react";
import pokemons from "./constants.js";
import Card from "./Card.js";

const Cards = () => {
    const filler = [];

    for (let i = 0; i < 6; i++) {
        filler.push({
            id: i,
            img: pokemons[i],
            clicks: 0,
        });
    }

    const [gameState, setGameState] = useState(filler);
    const [score, setScore] = useState(-1);
    const [best, setBest] = useState(0);

    useEffect(() => {
        const lose = gameState.filter((poke) => poke.clicks === 2);

        if (lose.length > 0) {
            setGameState(filler);
            setBest(score);
            setScore(-1);

            return;
        }

        setScore(score + 1);
    }, [gameState]);

    return (
        <div className="cards">
            <div>Score {score}</div>
            <div>High Score {best}</div>
            {gameState.map((poke, index) => {
                return (
                    <Card
                        img={poke.img}
                        clicks={poke.clicks}
                        setGameState={setGameState}
                        id={poke.id}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default Cards;
