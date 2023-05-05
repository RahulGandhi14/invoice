import { createAction } from '@reduxjs/toolkit'
import { TOGGLE_THEME } from './types'

export const toggleTheme = createAction<boolean>(TOGGLE_THEME)
