import React from 'react';

function setColorModeInStorage(value) {
  return localStorage.setItem('dark-mode', value);
}

function getColorModeInStorage() {
  return localStorage.getItem('dark-mode');
}

const isUserPrefersDark =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;
const HTML = document.documentElement;

export function useColorMode() {
  const darkModeIsOn = JSON.parse(getColorModeInStorage());
  const [isDark, setIsDark] = React.useState(darkModeIsOn);

  React.useEffect(() => {
    if (isUserPrefersDark && darkModeIsOn === null) {
      setColorModeInStorage(true);
      HTML.classList.add('dark');
      setIsDark(true);
    }

    if (darkModeIsOn) {
      HTML.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleColorMode = () => {
    HTML.classList.toggle('dark');
    setIsDark(!isDark);
    setColorModeInStorage(isDark ? false : true);
  };
  return {
    isDark,
    toggleColorMode,
  };
}
