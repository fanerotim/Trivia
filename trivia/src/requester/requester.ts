import type {
    QuestionData,
    TokenResponse,
    CategoryList
} from "./types";

import { useHandleToken } from "../auth/useHandleToken";

export const requester = async (
    url: string
): Promise<QuestionData[] | TokenResponse | CategoryList | Error> => {

    const {resetToken} = useHandleToken();

    const response = await fetch(url);
    
    if (!response.ok) {
        throw Error('Network request failed - please try again.')
    }

    const data = await response.json();
    
    // get API response code; invalid token returns response_code 3; according to their documentation
    const apiResponseCode = data.response_code
    // if token is invalid e.g. response_code !== 0
    if (apiResponseCode !== 0) {

        // TODO: add error handling as currenly there is no error handling for response_codes = failed request
        if (apiResponseCode === 2) {
            console.log('There was an invalid parameter sent with the request!')
        }

        resetToken();
    }

    return data;
}