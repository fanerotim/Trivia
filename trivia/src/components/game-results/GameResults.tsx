import { useLocation } from "react-router-dom"

export const GameResults = () => {

    const location = useLocation();
    const score = location.state;

    return (
        <>
            <h1>Game Over!</h1>
            <h4>You answered {score} questions correctly!</h4>
            <p>Want to play again?</p>
        </>
    )
}