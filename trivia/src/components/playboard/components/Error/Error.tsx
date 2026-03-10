import './Error.scss';
import { useNavigate } from 'react-router-dom';

export const Error = () => {

    const navigate = useNavigate();

    const submitAgainHandler = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Error!</h1>
            <button
                onClick={submitAgainHandler}
                className='submit__btn'
            >
                Submit Form Again
            </button>
        </div>
    )
}