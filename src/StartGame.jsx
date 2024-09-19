import { useContext } from "react";
import { GameContext } from "./GameContext";

export const StartGame = () => {
    const { startGame, handleStartGame } = useContext(GameContext);

    if (startGame == true) return null;

    return (
        <>
            <button onClick={handleStartGame}>Start new game!</button>
        </>
    );
};
