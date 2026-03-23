import './Header.scss';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export const Header = () => {
    return (
        <header
            className='header'
        >

            <h1
                className='header__logo'
            >
                Brainy
            </h1>

            <div
                className='header__theme__icon__container'
            >
                <MdLightMode 
                    className='header__theme__icon__container__light__mode'
                />
                <MdDarkMode 
                    className='header__theme__icon__container__dark__mode'
                />
            </div>
        </header>
    )
}