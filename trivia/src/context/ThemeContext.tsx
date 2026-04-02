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
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const updateTheme = (value: Theme) => {
        
        // fallback for browsers that do not support startViewTransition
        if (!document.startViewTransition()) {
            setTheme(value);
            return;
        }

        document.startViewTransition(() => {
            setTheme(value);
        })
    }

    return (
        <ThemeContext
            value={{ theme, updateTheme }}
        >
            {children}
        </ThemeContext>
    )
}