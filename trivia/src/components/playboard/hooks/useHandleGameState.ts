import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { type QuestionData } from "../../../requester/types";
import { type AnswerState } from "../types/types";
import { initialState } from "../utils/initialState";

export const useHandleGameState = (questions: QuestionData[]) => {

    // index controls the current question; when index changes, the questions switches to the next one
    const [index, setIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>([])
    const [score, setScore] = useState<number>(0);

    // state that represents user submitted answer: it is null when user has not answers; else it is true / false
    const [answerState, setAnswerState] = useState<AnswerState>(initialState);

    const navigate = useNavigate();

    // not the best solution, but it works for now
    const correctAnswer = questions[index] ? questions[index].correct_answer : '';

    const handleClick = (userAnswer: string) => {

        // if user has already submitted their answer do not allow further answer selections;
        if (answerState.isCorrect !== null) {
            return;
        }

        // update answerState by adding userAnswer
        setAnswerState((prev) => {
            return {
                ...prev,
                userAnswer: userAnswer,
            }
        })
    }

    const handleCheckAnswer = () => {

        setAnswerState((prev) => {
            return {
                ...prev,
                isCorrect: correctAnswer === prev.userAnswer,
                isSubmitted: true,
            }
        })

        setScore((prev) => correctAnswer === answerState.userAnswer ? prev + 1 : prev);
    }

    const handleNextQuestion = () => {
        // reset answerState when we change question
        setAnswerState((_) => initialState);
        // update index, so we can move to next question
        setIndex((prevIndex) => prevIndex + 1);
        // reset answers state, so answers can be updated
        setAnswers((_) => []);

        if (index + 1 === questions.length) {
            navigate('/game-results', {
                state: score
            })
        }
    }

    return {
        index,
        answers,
        answerState,
        correctAnswer,
        setAnswers,
        handleClick,
        handleCheckAnswer,
        handleNextQuestion
    }
}