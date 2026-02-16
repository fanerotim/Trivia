import './Error.scss';
import type { ErrorProps } from './types';

export const Error = ({ message }: ErrorProps) => {

    return (
        <div>
            <p>{message[0]}</p>
        </div>
    )
}