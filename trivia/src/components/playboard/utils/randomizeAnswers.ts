import { type QuestionData } from "../../../requester/types";

// possible cases hardcoded as I want to return a some sort of random array, not as random as possible algorithmic solution
const cases: string[] = ['reverse', 'pop', 'shift', 'randomIndex'];

export const randomizeAnswers = (questionData: QuestionData) => {

    let answers: string[] = [questionData.correct_answer, ...questionData.incorrect_answers];
    const answerCount = answers.length;

    for (let i = 0; i < answerCount; i++) {
        const currentCase = generateCurrentCase(answerCount);
        const randomNum = generateRandomNumber(answerCount);

        switch (currentCase) {
            case 'reverse':
                // simply reverse order of array elements
                answers.reverse();
                break;
            case 'pop':
                // remove last element of answers array and place it at index 1
                const poppedElement: string = answers.pop()!;
                answers.splice(randomNum, 0, poppedElement)
                break;
            case 'shift':
                // remove first element of answers array and place it at the end of the array
                const unshiftedElement: string = answers.shift()!;
                answers.push(unshiftedElement);
                break;
            case 'randomIndex':
                // remove last element and place it at a randomly generated index
                const element = answers.pop()!;
                const index = generateRandomNumber(answerCount);
                answers.splice(index, 0, element);
                break;
        }
    }
    return answers;
}

const generateRandomNumber = (count: number) => {
    const num = Math.floor(Math.random() * count);
    return num;
}

const generateCurrentCase = (answerCount: number) => {
    const caseIndex = generateRandomNumber(answerCount);
    return cases[caseIndex]
}