import './Error.scss';
import type { ErrorProps } from './types';

export const Error = ({ message }: ErrorProps) => {
    console.log(message, 'this is message')
    return (
        <div>
            <p>{message[0]}</p>
        </div>
    )
}