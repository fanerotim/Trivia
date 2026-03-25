import { createContext, useEffect, useState } from "react";
import type { ThemeContextType, Theme } from "./themeContextType";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
        
    const [theme, setTheme] = useState<Theme>(() => {
        const persistedTheme = localStorage.getItem('theme');
        
        if (persistedTheme === 'dark' || persistedTheme === 'light') {
            return persistedTheme;
        }
        return 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.body.setAttribute('data-theme', theme)
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