import { useState } from "react";
import { requester } from "../../../requester/requester";
import type { Category, CategoryList } from "../../../requester/types";

export const useGetCategories = () => {

    const [categories, setCategories] = useState<Category[]>([]);

    const getCategories = async () => {
        try {
            const response = await requester(import.meta.env.VITE_CATEGORY_LIST_URL) as CategoryList;
            setCategories((_) => response.trivia_categories);
        } catch (err) {
            const error = new Error();
            error.message = 'Network request failed';
            return error;
        }
    }

    getCategories();
    
    return {
        categories
    }
}

