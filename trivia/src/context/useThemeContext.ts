import { useContext } from "react";
import { ThemeContext } from './ThemeContext';

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw Error('ThemeContext must be used by components that have access to it.')
    }
    return context;
}