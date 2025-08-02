import { useTheme } from '../context/ThemeContext';
import theme1 from './theme1.module.css';
import theme2 from './theme2.module.css';
import theme3 from './theme3.module.css';

export const useThemeStyles = () => {
  const { theme } = useTheme();

  switch (theme) {
    case 'theme2':
      return theme2;
    case 'theme3':
      return theme3;
    default:
      return theme1;
  }
};
