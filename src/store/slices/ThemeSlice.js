import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themesArray: [],
  currentTheme: '',
};

function setThemeNameInStorage(value) {
  return localStorage.setItem('theme-name', value);
}

function getColorModeInStorage() {
  return localStorage.getItem('theme-name');
}

const HTML = document.documentElement;
// HTML.classList.add('monokai');

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    initTheme(state, action) {
      if (getColorModeInStorage() === null) {
        setThemeNameInStorage(action.payload);
        state.currentTheme = action.payload;
      } else {
        state.currentTheme = getColorModeInStorage();
        HTML.classList.add(getColorModeInStorage().toLowerCase());
      }
    },
    setTheme(state, action) {
      state.currentTheme = action.payload;
      HTML.removeAttribute('class');
      HTML.classList.add(action.payload.toLowerCase());
      setThemeNameInStorage(action.payload);
    },
  },
});

export const { setTheme, initTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
