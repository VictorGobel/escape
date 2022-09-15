import { createContext } from 'react';
import { Theme } from '../constants/theme';

export const ThemeUpdateContext = createContext<{ setTheme: (theme: Theme) => void }>({ setTheme: () => { } })
