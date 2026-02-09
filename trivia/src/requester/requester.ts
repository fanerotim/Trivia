import { type QuestionData } from "./types";
import { type TokenResponse } from "./types";

export const requester = async (
    url: string
): Promise<QuestionData[] | TokenResponse | Error> => {

    const response = await fetch(url);

    if (!response.ok) {
        throw Error('Network request failed - please try again.')
    }

    const data = await response.json();
    return data;
}