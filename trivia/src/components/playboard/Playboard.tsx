import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Playboard.scss';
import { decodeHTMLEntity } from './utils/decodeHTMLEntity';
import { randomizeAnswers } from './utils/randomizeAnswers';
import { type QuestionData } from '../../requester/types';
import { type AnswerState } from './types/types';

export const Playboard = () => {

    // index controls the current question; when index changes, the questions switches to the next one
    const [index, setIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>([])

    // state that represents user submitted answer: it is null when user has not answers; else it is true / false
    const [answerState, setAnswerState] = useState<AnswerState>({
        userAnswer: '',
        hasAnswered: false,
        isCorrect: null
    });

    // location is used to get the questions from its 'state' object
    const location = useLocation();
    const questions: QuestionData[] = location.state.questions.results;

    // store correct answer in a constant
    const correctAnswer = questions[index].correct_answer;

    // update answers state; this is not optimized, but it solves an in issue whereby order of answers change if we select an answer twice
    if (answers.length == 0) {
        const currentAnswers = randomizeAnswers(questions[index]);
        setAnswers((_) => currentAnswers)
    }

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

        // update index, so we can move to next question: this should be controlled by another handler for next btn; not yet added
        // setIndex((prev) => prev + 1);
    }

    const checkAnswer = () => {
        setAnswerState((prev) => {
            return {
                ...prev,
                isCorrect: correctAnswer === answerState.userAnswer
            }
        })
    }

    return (
        <>
            <div>Welcome to playboard</div>
            <h3>{decodeHTMLEntity(questions[index].question)}</h3>

            <div>
                {answers.map((a: string, i: number) => {
                    return (
                        <p
                            key={i}
                            onClick={() => handleClick(a)}
                            className={
                                `${a === answerState.userAnswer
                                    ? 'selected_answer'
                                    : ''}
                                    
                                ${answerState.userAnswer === a && answerState.isCorrect === true
                                    ? 'correct_answer'
                                    : answerState.userAnswer === a && answerState.isCorrect === false
                                        ? 'incorrect_answer' : ''}    
                                    `}
                        >
                            {decodeHTMLEntity(a)}
                        </p>
                    )
                })}
                {answerState.hasAnswered && <button onClick={checkAnswer}>Check answer</button>}
                {answerState.userAnswer !== '' && answerState.isCorrect ? 'Correct!' : ''}
                {answerState.hasAnswered === true && answerState.isCorrect === false ? `Correct answer is ${correctAnswer}` : ''}
            </div>
        </>
    )
}