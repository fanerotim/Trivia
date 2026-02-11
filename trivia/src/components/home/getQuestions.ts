import { requester } from "../../requester/requester"

export const useRequestQuestions = () => {

    const requestQuestions = async () => {
        // TODO: build a query builder
        try {
            const questions = await requester(`${import.meta.env.BASE_URL}amount=10&category=21&difficulty=easy`);
            return questions;
        } catch (err) {
            // TODO: handle error case
            console.log(err);
        }
    }

    return {
        requestQuestions
    }
}