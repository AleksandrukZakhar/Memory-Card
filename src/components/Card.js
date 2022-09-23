const Card = ({ img, setGameState, clicks, id }) => {
    const order = Math.floor(Math.random() * 1000);

    return (
        <div className="card" style={{ order: `${order}` }}>
            <img
                src={img}
                alt=""
                onClick={() => {
                    console.log(`click ${id}`);
                    setGameState((prevState) => {
                        const filtered = prevState.filter(
                            (poke) => poke.id !== id
                        );

                        filtered.push({
                            id: id,
                            img: img,
                            clicks: clicks + 1,
                        });

                        return filtered;
                    });
                }}
            />
        </div>
    );
};

export default Card;
