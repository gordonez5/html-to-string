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
          ? <><FontAwesomeIcon icon={faSun} /><span>Light mode</span></>
          : <><FontAwesomeIcon icon={faMoon} /><span>Dark mode</span></>
        }
      </button>
    </div>
  );
};

export default ThemeToggle;
