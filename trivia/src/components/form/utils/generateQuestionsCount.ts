import { type SelectValues } from "../components/select/types/selectValues";

export const generateQuestionsCount = () => {

    const minNumberOfQuestions = 10;
    const maxNumberOfQuestions = 50;
    const numberOfQuestions: SelectValues = [];

    for (let i = minNumberOfQuestions; i <= maxNumberOfQuestions; i++) {
        const current = {
            id: i,
            name: i.toString()
        }

        numberOfQuestions.push(current);
    }

    return {
        numberOfQuestions
    };
}
