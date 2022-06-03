import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'store/slices/ThemeSlice';
import Button from 'UI/Button';
import Popup from 'UI/Popup';
import ThemeButton from './ThemeButton';

import DarkThemeImg from '../assets/theme/dark_theme.svg';
import LightThemeImg from '../assets/theme/light_theme.svg';
import MonokaiThemeImg from '../assets/theme/monokai_theme.svg';

const ThemePopup = ({ open, onClose }) => {
  const { theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setTheme(e.currentTarget.id));
  };

  return (
    <AnimatePresence initial={false}>
      <Popup
        onClose={onClose}
        overlayClose={false}
        key={open}
        open={open}
        title={'Select a theme'}>
        <div className='flex flex-wrap gap-4'>
          <ThemeButton
            onClick={handleClick}
            imgSrc={DarkThemeImg}
            active={theme.currentTheme}
            name={'Dark'}
          />
          <ThemeButton
            onClick={handleClick}
            imgSrc={LightThemeImg}
            active={theme.currentTheme}
            name={'Light'}
          />
          <ThemeButton
            onClick={handleClick}
            imgSrc={MonokaiThemeImg}
            active={theme.currentTheme}
            name={'Monokai'}
          />
        </div>

        <div className='mt-5 flex justify-end'>
          <Button
            variant={'contained'}
            onClick={onClose}
            className={'py-1.5 text-sm'}>
            OK
          </Button>
        </div>
      </Popup>
    </AnimatePresence>
  );
};

export default ThemePopup;
