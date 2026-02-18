import { type FormValues } from "../components/form/types/types";
import { requester } from "../requester/requester";
import type { Category } from "../requester/types";

export const queryBuilder = async (
    { questions_count,
        category,
        difficulty
    }: FormValues,
    categories: Category[]
) => {

    // get category id, so it can be used in the url below
    const categoryId = categories.filter((c) => c.name === category)[0].id;
    const url = `${import.meta.env.VITE_BASE_URL}amount=${questions_count}&category=${categoryId}&difficulty=${difficulty}`;
    const questions = await requester(url);
}