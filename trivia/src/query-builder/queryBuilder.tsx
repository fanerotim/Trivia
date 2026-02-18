import { type FormValues } from "../components/form/types/types";
import { requester } from "../requester/requester";
import type { Category } from "../requester/types";
import { useHandleToken } from "../auth/useHandleToken";

export const queryBuilder = async (
    { questions_count,
        category,
        difficulty
    }: FormValues,
    categories: Category[]
) => {

    const { getToken } = useHandleToken();
    const token = getToken();
    // get category id, so it can be used in the url below
    const categoryId = categories.filter((c) => c.name === category)[0].id;
    const url = `${import.meta.env.VITE_BASE_URL}amount=${questions_count}&category=${categoryId}&difficulty=${difficulty}&token=${token}`;
    const questions = await requester(url);
    // TOOD: decide whether to return questions or just return the url and send the url to the requester from another component / hook. 
    // for now I will keep it like this
    return questions;
}