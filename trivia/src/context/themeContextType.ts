export type Theme = 'light' | 'dark';

export type ThemeContextType = {
    theme: Theme;
    updateTheme: (value: Theme) => void;
}