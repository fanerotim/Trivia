import {type AnswerState } from "../types/types"

export const initialState: AnswerState = {
    userAnswer: '',
    hasAnswered: false,
    isCorrect: null,
    isSubmitted: false
}