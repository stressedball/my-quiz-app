import { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameContext";

export const Game = () => {
    const { currentQuestion, handleAnswer, startGame, endGame, score, level } =
        useContext(GameContext);
    const [answers, setAnswers] = useState([]);

    console.log(currentQuestion);

    useEffect(() => {
        if (currentQuestion == undefined) return;
        setAnswers([
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer,
        ]);
    }, [currentQuestion]);

    if (startGame == false || endGame == true) return null;
    // if (!Array.isArray(questions)) {
    //     return <p>Loading</p>;
    // }

    return (
        <>
            <p>Score: {score}</p>
            <p>Question n°{level + 1}</p>
            <p>{currentQuestion?.question}</p>
            {answers.map((a) => (
                <button
                    key={answers.indexOf(a)}
                    onClick={() => handleAnswer(a)}
                >
                    {a}
                </button>
            ))}
        </>
    );
};
