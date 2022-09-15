export enum ThemeName {
    Dark = 'Dark',
    Light = 'Light',
}

export type Theme = {
    name: string;
    color: {
        background: string;
        backgroundHighlight: string;
        text: string;
    };
    mailing: {
        color: {
            background: string;
            text: string;
            highlight: string;
        }
    }
}

export const themes: Record<ThemeName, Theme> = {
    Dark: {
        name: ThemeName.Dark,
        color: {
            background: '#282c34',
            backgroundHighlight: '#333842',
            text: 'white',
        },
        mailing: {
            color: {
                background: "white",
                text: 'black',
                highlight: '#007ac1',
            }
        },
    },
    Light: {
        name: ThemeName.Light,
        color: {
            background: 'white',
            backgroundHighlight: '#00000055',
            text: 'black',
        },
        mailing: {
            color: {
                background: "white",
                text: 'black',
                highlight: '#007ac1',
            }
        },
    }
}
