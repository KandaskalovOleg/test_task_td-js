import './About.scss'

export const About = () => {
  return (
    <div className='about' id="about">
      <div className='main-content'>
        <h2>O projekcie</h2>
        <p>
          Decyzja Ministerstwa Klimatu Rzeczypospolitej Polskiej oficjalnie potwierdza, że inwestycje w pierwszą elektrownię jądrowe w Polsce są zgodne z interesem publicznym oraz polityką prowadzoną przez państwo, zwłaszcza polityką energetyczną. Każdy obywatel Polski będzie mógł czerpać korzyści z energii wytwarzanej przez elektrownię jądrowe.
        </p>
        <p>
          &ldquo;Planowany projekt realizuje Polski Program Rozwoju Energii Jądrowej, jest zgodny z Polityką Energetyczną Polski do 2040 roku oraz odpowiada celom polityki klimatycznej Unii Europejskiej&rdquo; - głosi komunikat.
        </p>
        <p className='bold-text'>
          Aby rozpocząć pracę, prosimy o zarejestrowanie się na tej stronie i dokonanie minimalnej wpłaty w wysokości 1100 złotych.
        </p>
      </div>
      <div className='gradient'>
          <div className='person-info'>
            <h3>Mateusz Berger</h3>
            <p>Prezes spółki Polskie Elektrownie Jądrowe (PEJ)</p>
          </div>
        </div>
    </div>
  );
}