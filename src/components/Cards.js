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

    useEffect(() => {
        const lose = gameState.filter((poke) => poke.clicks === 2);

        if (lose.length > 0) {
            setGameState(filler);
        }
    }, [gameState]);

    return (
        <div className="cards">
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
