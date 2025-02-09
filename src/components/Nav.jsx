import lightModeIcon from '/images/light-mode-icon.svg';
import darkModeIcon from '/images/dark-mode-icon.svg';
import { useEffect } from 'react';
import '../nav-styles.css';

export default function Nav({handleDarkMode, darkMode}) {
    useEffect(() => {
        if (darkMode) {
            document.querySelector('body').classList.add('dark');
        } else {
            document.querySelector('body').classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav className={darkMode ? 'dark' : ''}>
            <div className="nav-wrapper">
              <h1 className="title">Where in the world?</h1>
              <button onClick={handleDarkMode} className="dark-mode"
                    type="button" 
                    aria-label="change mode">
                <img src={darkMode ? lightModeIcon : darkModeIcon} alt="dark mode icon" />
                <span>dark mode</span>
              </button>
            </div>
        </nav>
    )
}