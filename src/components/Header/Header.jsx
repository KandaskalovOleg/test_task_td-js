import './Header.scss';
import { useEffect } from 'react';

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

  return (
    <header>
      <div className="bg-header">
        <h1>Polskie Elektrownie Jądrowe sp. z o. o.</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">
              O projekcie
            </a>
          </li>
          <li>
            <a href="#company">
              O spółce
            </a>
          </li>
          <li>
            <a href="#opinion">
              Opinie
            </a>
          </li>
          <li>
            <a href="#earn">
              Dla inwestorów
            </a>
          </li>
          <li>
            <a href="#order">
              Jak zacząć?
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}