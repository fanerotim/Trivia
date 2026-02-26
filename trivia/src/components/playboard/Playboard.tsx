import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './Playboard.scss';

import { classGenerator } from './utils/classGenerator';
import { randomizeAnswers } from './utils/randomizeAnswers';
import { decodeHTMLEntity } from './utils/decodeHTMLEntity';
import { useHandleGameState } from './hooks/useHandleGameState';
import { type QuestionData } from '../../requester/types';
import { AnswerFeedback } from './components/AnswerFeedback';

export const Playboard = () => {

    // location is used to get the questions from its 'state' object
    const location = useLocation();
    const questions: QuestionData[] = location.state.questions.results;

    const {
        index,
        answers,
        answerState,
        correctAnswer,
        setAnswers,
        handleClick,
        handleCheckAnswer,
        handleNextQuestion
    } = useHandleGameState(questions)!;

    // update answers state; this is not optimized, but it solves an issue whereby order of answers change if we select an answer twice
    useEffect(() => {

        // if there are no more questions, do not do anything
        if (questions[index]) {
            const currentAnswers = randomizeAnswers(questions[index]);
            setAnswers((_) => currentAnswers)
        }

    }, [index])

    return (
        <>
            <div>Welcome to playboard</div>
            {/* if no more questions there is nothing to decode; do not show anything */}
            <h3>{questions[index] && decodeHTMLEntity(questions[index].question)}</h3>

            <div>
                {answers.map((a: string, i: number) => {
                    return (
                        <p
                            key={i}
                            onClick={() => handleClick(a)}
                            className={classGenerator(a, answerState.userAnswer, answerState.isCorrect, answerState.isSubmitted)}
                        >
                            {decodeHTMLEntity(a)}
                        </p>
                    )
                })}
                {answerState.hasAnswered && !answerState.isSubmitted && <button onClick={handleCheckAnswer}>Check answer</button>}
                {answerState.isSubmitted && <AnswerFeedback isCorrect={answerState.isCorrect} correctAnswer={correctAnswer} />}
                {answerState.isSubmitted && <button onClick={handleNextQuestion}>Next question</button>}
            </div>
        </>
    )
}