import {type questionData } from "./types";

export const requester = async (
    amount: number,
    category: number,
    difficulty: string
): Promise<questionData[] | Error> => {

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}amount=${amount}&category=${category}&difficulty=${difficulty}`);

    if (!response.ok) {
        throw Error('Network request failed - please try again.')
    }

    const data = await response.json();
    return data;
}