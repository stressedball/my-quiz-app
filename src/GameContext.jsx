import { createContext, useState, useEffect } from "react";

export const GameContext = createContext(null);

export default function GameProvider({ children }) {
    const [questions, setQuestions] = useState([]);
    const [startGame, setStartGame] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [level, setLevel] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [score, setScore] = useState(0);

    const handleStartGame = () => setStartGame(!startGame);
    const handleNextLevel = () => setLevel(level + 1);
    const handleAnswer = (answer) => {
        if (answer == questions[level].correct_answer) {
            setScore(score + 1);
        }
        setLevel(level + 1);
    };

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then((d) => d.json())
            .then((d) => setQuestions(d.results))
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        if (!questions) return;
        if (level > 4) {
            setEndGame(true);
            return;
        }
        setCurrentQuestion(questions[level]);
    }, [questions, level]);

    return (
        <GameContext.Provider
            value={{
                currentQuestion,
                questions,
                startGame,
                handleStartGame,
                endGame,
                level,
                handleNextLevel,
                handleAnswer,
                score,
            }}
        >
            {children}
        </GameContext.Provider>
    );
}
