import { useContext } from "react";
import { GameContext } from "./GameContext";

export const EndGame = () => {
    const { endGame, score } = useContext(GameContext);
    if (endGame != true) return null;
    return (
        <>
            <p>End of Game!</p>
            <p>Your score: {score}</p>
        </>
    );
};
