import { useLocation } from 'react-router-dom';

import './Playboard.scss';
import { classGenerator } from './utils/classGenerator';
import { decodeHTMLEntity } from './utils/decodeHTMLEntity';
import { type QuestionData } from '../../requester/types';
import { AnswerFeedback } from './components/AnswerFeedback';
import { useHandleGameState } from './hooks/useHandleGameState';
import { randomizeAnswers } from './utils/randomizeAnswers';

export const Playboard = () => {

    // location is used to get the questions from its 'state' object
    const location = useLocation();
    const questions: QuestionData[] = location.state.questions.results;

    const { index, answers, answerState, correctAnswer, setAnswers, handleClick, handleCheckAnswer, handleNextQuestion } = useHandleGameState(questions)!;

    if (questions.length == index) {
        return;
    }

    // update answers state; this is not optimized, but it solves an in issue whereby order of answers change if we select an answer twice
    if (answers.length === 0) {
        const currentAnswers = randomizeAnswers(questions[index]);
        setAnswers((_) => currentAnswers)
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