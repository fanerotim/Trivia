export type QuestionData = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type TokenResponse = {
    response_code: number;
    response_message: string;
    token: string;
}