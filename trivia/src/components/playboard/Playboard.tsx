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

    // state that represents user submitted answer: it is null when user has not answers; else it is true / false
    const [answerState, setAnswerState] = useState<AnswerState>({
        user_answer: '',
        hasAnswered: false
    });

    // location is used to get the questions from its 'state' object
    const location = useLocation();
    const questions: QuestionData[] = location.state.questions.results;

    // store correct answer in a constant
    const correctAnswer = questions[index].correct_answer;

    // generate an array of answers in random order
    const answers = randomizeAnswers(questions[index]);

    // This is a possible approach, but far from final
    // TODO: complete this functionality
    const handleClick = (userAnswer: string) => {

        // update state with correct_answer
        setAnswerState((prev) => {
            return {
                hasAnswered: true,
                user_answer: userAnswer,
            }
        })

        // update index, so we can move to next question: this should be controlled by another handler for next btn; not yet added
        // setIndex((prev) => prev + 1);
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
                        // className={}
                        >
                            {decodeHTMLEntity(a)}
                        </p>
                    )
                })}
            </div>
        </>
    )
}