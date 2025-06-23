import { NavLink } from 'react-router-dom';
import { countryData, getFlagEmoji } from '../data/countries';

function NavBar() {
  const countries = Object.values(countryData).sort((a, b) => a.id - b.id);

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <NavLink to='/' activeclassname="active">HTML to string</NavLink>
      </div>
      <div className='navbar-links'>
        {countries.map(({ code, name }) => {
          const flag = getFlagEmoji(code);
          return (
            <NavLink key={`${code}`} to={`/country/${name.toLowerCase()}`} className='nav-link' activeclassname="active">{flag} {name}</NavLink>
          )
        })}
      </div>
    </nav>
  );
};

export default NavBar;