import { createContext } from 'react';

export const themes = {
  green: {
    color: 'green-color',
    background: '#7d7d7d'
  },
  orange: {
    color: 'orange',
    background: '#ffffff',
  }
};

export const ThemeContext = createContext();