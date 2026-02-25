import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { type QuestionData } from "../../../requester/types";
import { type AnswerState } from "../types/types";

const initialState = {
    userAnswer: '',
    hasAnswered: false,
    isCorrect: null,
    isSubmitted: false
}

export const useHandleGameState = (questions: QuestionData[]) => {

    // index controls the current question; when index changes, the questions switches to the next one
    const [index, setIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>([])

    // state that represents user submitted answer: it is null when user has not answers; else it is true / false
    const [answerState, setAnswerState] = useState<AnswerState>(initialState);

    const navigate = useNavigate();

    // not the best solution, but it works for now
    const correctAnswer = questions[index] ? questions[index].correct_answer : '';

    // This is a possible approach, but far from final
    // TODO: complete this functionality
    const handleClick = (userAnswer: string) => {

        // if user has already submitted their answer return; do not allow further clicks
        if (answerState.isCorrect !== null) {
            return;
        }

        // update state with correct_answer
        setAnswerState((prev) => {
            return {
                ...prev,
                hasAnswered: true,
                userAnswer: userAnswer,
            }
        })
    }

    const handleCheckAnswer = () => {
        setAnswerState((prev) => {
            return {
                ...prev,
                isCorrect: correctAnswer === answerState.userAnswer,
                isSubmitted: true
            }
        })
    }

    const handleNextQuestion = () => {
        // reset answerState
        setAnswerState((_) => initialState);
        // update index, so we can move to next question: this should be controlled by another handler for next btn; not yet added
        setIndex((prevIndex) => prevIndex + 1);
        // reset answers state, so answers can be updated
        setAnswers((_) => []);

        if (index + 1 === questions.length) {
            navigate('/game-results')
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