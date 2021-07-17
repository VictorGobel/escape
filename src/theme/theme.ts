export enum ThemeName {
    dark = 'dark',
    light = 'light',
}

export type Theme = {
    color: {
        background: string
        backgroundHighlight: string;
        text: string;
    }
}

export const themes: Record<ThemeName, Theme> = {
    dark: {
        color: {
            background: '#282c34',
            backgroundHighlight: '#333842',
            text: 'white',
        },
    },
    light: {
        color: {
            background: 'white',
            backgroundHighlight: '#00000055',
            text: 'black',
        },
    }
}