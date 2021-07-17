import { createContext } from 'react';
import { Theme } from '../theme/theme';

export const ThemeUpdateContext = createContext<{ setTheme: (theme: Theme) => void }>({ setTheme: () => { } })
