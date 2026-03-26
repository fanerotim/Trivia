import './Error.scss';
import { useNavigate } from 'react-router-dom';

export const Error = ({ message }: { message: string }) => {

    const navigate = useNavigate();

    const submitAgainHandler = () => {
        navigate('/');
    }

    return (
        <div
            className='request__failed__error'
        >
            <h1
                className='request__failed__error__message'
            >
                {message}
            </h1>
            <button
                onClick={submitAgainHandler}
                className='submit__btn'
            >
                Submit Form Again
            </button>
        </div>
    )
}