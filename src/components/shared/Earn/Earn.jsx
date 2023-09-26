/* eslint-disable react/prop-types */
import React from 'react';
import './Earn.scss'
import { Range } from 'react-range';
import earnSrc from './../../../assets/images/earn.jpg';

export const Earn = () => {
  const [values, setValues] = React.useState([1100]);

  return (
    <>
      <div className='earn' id="earn">
        <h2>Ile bede zarabiać?</h2>
        <p>Twoja inwestycja</p>
        <div className='range'>
          <Range
              step={100}
              min={1100}
              max={500000}
              values={values}
              onChange={(newValues) => setValues(newValues)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '6px',
                    width: '100%',
                    backgroundColor: '#fff'
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '36px',
                    width: '36px',
                    backgroundColor: '#fff',
                  }}
                />
              )}
            />
            <div>
              <span>1100 pln</span>
              <span>500 000+ pln</span>
            </div>
            <span>Zarobisz</span>
            <p>{values * 6.5} PLN</p>
        </div>
        <button>Dolacz do nas</button>
      </div>
      <img src={earnSrc} alt="Earn with us img" />
    </>
  );
}