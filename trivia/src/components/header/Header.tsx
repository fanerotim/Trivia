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
                className='header__dark__light__mode__icons__container'
            >
                <MdLightMode />
                <MdDarkMode />
            </div>
        </header>
    )
}