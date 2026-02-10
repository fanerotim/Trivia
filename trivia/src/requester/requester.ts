import type {
    QuestionData,
    TokenResponse,
    CategoryList
} from "./types";

export const requester = async (
    url: string
): Promise<QuestionData[] | TokenResponse | CategoryList | Error> => {

    const response = await fetch(url);

    if (!response.ok) {
        throw Error('Network request failed - please try again.')
    }

    const data = await response.json();
    return data;
}