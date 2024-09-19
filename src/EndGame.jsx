import { useContext } from "react";
import { GameContext } from "./GameContext";

export const EndGame = () => {
    const { endGame, score, handleNewGame } = useContext(GameContext);
    if (endGame != true) return null;
    return (
        <>
            <p className="text-xl">Game over!</p>
            <p className="text-xl">Your score: {score}</p>
            <button className="my-3" onClick={handleNewGame}>Start new game?</button>
        </>
    );
};
