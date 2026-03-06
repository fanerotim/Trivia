import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const GameResults = () => {

    const location = useLocation();
    const score = location.state;
    
    const navigate = useNavigate();

    const handlePlayAgain = () => {
        navigate('/');
    }

    return (
        <>
            <h1>Game Over!</h1>
            <h4>You answered {score} questions correctly!</h4>
            <button onClick={handlePlayAgain}>Play again</button>
        </>
    )
}