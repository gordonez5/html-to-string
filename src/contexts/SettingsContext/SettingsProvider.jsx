import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import { settingsReducer, initialState } from './settingsReducer';
import { actionTypes } from './actionTypes';

const SettingsContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => useContext(SettingsContext);

const SettingsProvider = ({ children }) => {
  const [settings, dispatch] = useReducer(settingsReducer, initialState);

  // Load from localStorage or use system preference
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('settings')) || {};
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

    dispatch({
      type: actionTypes.SET_THEME,
      payload: stored.theme || (prefersDark ? 'dark' : 'light'),
    });

    if (stored.view) {
      dispatch({ type: actionTypes.SET_VIEW, payload: stored.view });
    }
  }, []);

  // Persist to localStorage + apply theme
  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
    document.body.setAttribute('data-theme', settings.theme);
  }, [settings]);

  const toggleTheme = () => {
    dispatch({
      type: actionTypes.SET_THEME,
      payload: settings.theme === 'light' ? 'dark' : 'light',
    });
  };

  return (
    <SettingsContext.Provider value={{ settings, dispatch, toggleTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
