import './Home.scss';
import { Form } from '../form/Form';
import { Footer } from '../footer/Footer';
import { useHandleToken } from '../../auth/useHandleToken';

export const Home = () => {

    const { setToken } = useHandleToken();
    // set token upon initial page load
    setToken();

    return (
        <div
            className='app__container'
        >
            <div
                className='home__page__text__container'
            >
                <h1
                    className='home__page__text__container__heading'
                >
                    Brainy
                </h1>
                <p
                    className='home__page__text__container__description'
                >
                    This is a small game. Pick a category, choose number of questions and select difficulty. That's all. I hope you have fun!
                </p>
            </div>

            <Form />
            <Footer />
        </div>
    )
}