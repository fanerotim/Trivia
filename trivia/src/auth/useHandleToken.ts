import { requester } from "../requester/requester";
import type { TokenResponse } from "../requester/types";

export const useHandleToken = () => {

    const setToken = async () => {

        // check if we already have token - if we do, do not set another one
        const hasToken = getToken();

        if (hasToken) {
            return;
        }

        // if we do not have a token, then set one
        const response = await requester(import.meta.env.VITE_TOKEN_REQ_URL) as TokenResponse;
        const token = response.token;
        sessionStorage.setItem('token', token);
    }

    const getToken = () => {
        
        const token = sessionStorage.getItem('token');
        
        if (token) {
            return token;
        }

        return null;
    }

    return {
        setToken,
        getToken
    }
}
