import { createReducer } from '@reduxjs/toolkit'
import { toggleTheme } from './actions'
import { IThemeState } from './types'

const initialState: IThemeState = { isDarkTheme: false }

export default createReducer(initialState, (builder) => {
    builder.addCase(toggleTheme, (state, action) => {
        state.isDarkTheme = action.payload
    })
})
