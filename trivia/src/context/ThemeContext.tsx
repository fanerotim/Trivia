import { createContext, useState } from "react";
import type { ThemeContextType, Theme } from "./themeContextType";


export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {

    const [theme, setTheme] = useState<Theme>('light');

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