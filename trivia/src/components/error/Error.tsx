import './Error.scss';
import type { ErrorProps } from './types';

export const Error = ({ message }: ErrorProps) => {

    return (
        <div
            className='error__message__container'
        >
            <p
                className='error__message__container__text'
            >
                {message[0]}
            </p>
        </div>
    )
}