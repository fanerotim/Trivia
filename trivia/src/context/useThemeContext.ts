import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    return context;
}