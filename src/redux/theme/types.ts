export interface IThemeState {
    isDarkTheme: boolean
}

export const TOGGLE_THEME = 'TOGGLE_THEME'

interface ToggleTheme {
    type: typeof TOGGLE_THEME
    payload: boolean
}

export type ThemeActionType = ToggleTheme
