import { requester } from "../../../requester/requester";
import type { Category, CategoryList } from "../../../requester/types";

export const useGetCategories = () => {

    const getCategories = async (): Promise<Category[] | Error> => {

        try {
            const response = await requester(import.meta.env.VITE_CATEGORY_LIST_URL) as CategoryList;
            return response.trivia_categories;
        } catch (err) {
            const error = new Error();
            error.message = 'Network request failed';
            return error;
        }
    }

    return {
        getCategories
    }
}

