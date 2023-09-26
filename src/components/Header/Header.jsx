/* eslint-disable react/no-unknown-property */
import './Header.scss';
import { useEffect, useState } from 'react';

export const Header = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  
    if (isBurgerOpen) {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    } else {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }
  };
  
  const handleResize = () => {
    if (window.innerWidth >= 900 && isBurgerOpen) {
      setIsBurgerOpen(false);
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isBurgerOpen]);
  
  const closeBurgerMenu = () => {
    if (isBurgerOpen) {
      toggleBurgerMenu();
    }
  };


  return (
    <header>
      <div className="bg-header">
        <h1>Polskie Elektrownie Jądrowe sp. z o. o.</h1>
      </div>
      <div className="burger-button" onClick={toggleBurgerMenu}>
        {!isBurgerOpen ? (
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          </svg>
        ) : (
          <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
        )}
        
      </div>
      <nav className={`${isBurgerOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#about" onClick={closeBurgerMenu}>
              O projekcie
            </a>
          </li>
          <li>
            <a href="#company" onClick={closeBurgerMenu}>
              O spółce
            </a>
          </li>
          <li>
            <a href="#opinion" onClick={closeBurgerMenu}>
              Opinie
            </a>
          </li>
          <li>
            <a href="#earn" onClick={closeBurgerMenu}>
              Dla inwestorów
            </a>
          </li>
          <li>
            <a href="#order" onClick={closeBurgerMenu}>
              Jak zacząć?
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}