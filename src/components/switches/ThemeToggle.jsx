import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames';

import { useSettings } from '../../contexts/SettingsContext';

const ThemeToggle = () => {
  const { settings, toggleTheme } = useSettings();
  return (
    <div className="theme-toggle">
      <button className={cx('btn', 'btn--toggle', 'theme')} onClick={toggleTheme}>
        {settings.theme === 'light'
          ? <FontAwesomeIcon icon={faMoon} />
          : <FontAwesomeIcon icon={faSun} />
        }
      </button>
    </div>
  );
};

export default ThemeToggle;
