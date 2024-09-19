import { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameContext";
import { decode } from "html-entities";

export const Game = () => {
    const { currentQuestion, handleAnswer, startGame, endGame, score, level } =
        useContext(GameContext);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (currentQuestion == undefined) return;
        setAnswers([
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer,
        ]);
    }, [currentQuestion]);

    if (startGame == false || endGame == true) return null;

    return (
        <>
            <p className="text-center text-xl">Score: {score}</p>

            <p>Question n°{level + 1}</p>

            <p className="text-center text-xl my-3">
                {decode(currentQuestion?.question)}
            </p>

            {answers.map((a) => (
                <p
                    className="
                        p-2 border rounded-md my-1
                        min-w-16
                        text-center
                        hover:cursor-pointer
                        hover:border-slate-400
                        hover:text-slate-400
                        "
                    key={answers.indexOf(a)}
                    onClick={() => handleAnswer(a)}
                >
                    {decode(a)}
                </p>
            ))}
            <div></div>
        </>
    );
};
