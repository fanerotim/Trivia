import './GameResults.scss';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const GameResults = () => {

    const location = useLocation();
    const results = location.state;

    const navigate = useNavigate();

    const handlePlayAgain = () => {
        navigate('/');
    }

    return (
        <div
            className='game__results__container'
        >
            <h1
                className='game__results__summary__heading'
            >
                Great game!
            </h1>
            <h4
                className='game__results__summary__text'
            >
                You answered
                <span
                    className='game__results__summary__correct__answers'
                >
                    {results.score}
                </span>
                out of
                <span
                    className='game__results__summary__total__questions'
                >
                    {results.questions__count}
                </span>
                questions correctly!
            </h4>
            <button
                onClick={handlePlayAgain}
                className='submit__btn'
            >
                Play again
            </button>
        </div>
    )
}