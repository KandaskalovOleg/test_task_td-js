import './Company.scss'

export const Company = () => {
  return (
    <div className='company' id="company">
      <div className='company-wrapper'>
        <h2>
          O spółce
        </h2>
        <div className='company-info'>
          <p>
          Jak zaznaczono, elektrownia jądrowe ma na celu zrekompensowanie przewidywanego wzrostu zapotrzebowania na energię elektryczną, stabilizację dostaw energii oraz dywersyfikację źródeł energii w kraju.
          </p>
          <p>
            Zgodnie z zezwoleniem, inwestor może złożyć podania o dalsze decyzje administracyjne, zwłaszcza dotyczące określenia lokalizacji. Według Ministerstwa Klimatu i Środowiska, decyzję popiera 86% Polaków, z których większość wyraża zgodę na budowę elektrowni atomowej w pobliżu swojego miejsca zamieszkania.
          </p>
          <p>
          W ramach Polskiego Programu Rozwoju Energii Jądrowej planowana jest budowa dwóch elektrowni atomowych.
          </p>
        </div>
        <button 
          type="submit" 
          >
            Zarejestruj się i zarabiaj
        </button>
        <span>
        Dane rejestrowe spółki:
  Polskie Elektrownie Jądrowe spółka z ograniczoną odpowiedzialnością z siedzibą w Warszawie, ul. Mokotowska 49, 00-542 Warszawa, spółka wpisana do Rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla m. st. Warszawy w Warszawie, XII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0000347416, kapitał zakładowy 2.948.201.430 zł, NIP: 701 021 82 99, REGON: 142242032.
        </span>
      </div>
    </div>
  );
}