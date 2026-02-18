import './Home.scss';
import { Form } from '../form/Form';
import { useHandleToken } from '../../auth/useHandleToken';

export const Home = () => {

    const { setToken } = useHandleToken();
    // set token upon initial page load
    setToken();

    return (
        <>
            <h1>Welcome to Trivia</h1>
            <Form />
        </>
    )
}