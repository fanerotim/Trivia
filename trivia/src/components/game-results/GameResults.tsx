import { useLocation } from "react-router-dom"

export const GameResults = () => {

    const location = useLocation();
    console.log(location.state);

    return (
        <>
            <h1>Game Over!</h1>
            <p>Want to play again?</p>
        </>
    )
}