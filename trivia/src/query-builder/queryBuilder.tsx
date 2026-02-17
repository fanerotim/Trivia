import { type FormValues } from "../components/form/types/types";
import { requester } from "../requester/requester";

export const queryBuilder = async ({ questions_count, category, difficulty }: FormValues) => {

    const url = `${import.meta.env.VITE_BASE_URL}amount=${questions_count}&difficulty=${difficulty}`;
    const questions = await requester(url);
    console.log(questions);

}