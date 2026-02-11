import { requester } from "../requester/requester";

export const requestToken = async () => {
    const response = await requester(import.meta.env.VITE_TOKEN_REQ_URL);
    return response;
}