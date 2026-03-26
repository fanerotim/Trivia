import './Header.scss';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useThemeContext } from '../../context/useThemeContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const { theme, updateTheme } = useThemeContext();
    const navigate = useNavigate();

    const logoClickHandler = () => {
        navigate('/');
    }

    return (
        <header
            className='header'
        >

            <h1
                onClick={logoClickHandler}
                className='header__logo'
            >
                Brainy
            </h1>

            <div
                className='header__theme__icon__container'
            >

                {theme === 'light'
                    ?
                    <MdDarkMode
                        className='header__theme__icon__container__dark__mode'
                        onClick={() => { updateTheme('dark') }}
                    />
                    :
                    <MdLightMode
                        className='header__theme__icon__container__light__mode'
                        onClick={() => { updateTheme('light') }}
                    />
                }

            </div>
        </header>
    )
}