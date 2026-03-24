import { createContext, useEffect, useState } from "react";
import type { ThemeContextType, Theme } from "./themeContextType";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {

    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light';
        
    const [theme, setTheme] = useState<Theme>(initialTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const updateTheme = (value: Theme) => {
        setTheme(value);
    }

    return (
        <ThemeContext
            value={{ theme, updateTheme }}
        >
            {children}
        </ThemeContext>
    )
}