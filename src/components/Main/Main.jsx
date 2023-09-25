import './Main.scss';
import { Register } from "../shared/Register/Register";
import { Gratitude } from '../shared/Gratitude/Gratitude';
import { About } from '../shared/About/About';
import { Company } from '../shared/Company/Company';
import { Opinion } from '../shared/Opinion/Opinion';
import { Earn } from '../shared/Earn/Earn';

export const Main = () => {
  return (
    <main>
      <div className='intro'>
        <div className='register'>
          <Register />
        </div>
        <div className='gratitude'>
          <Gratitude />
        </div>
      </div>
      <About />
      <Company />
      <Opinion />
      <Earn />
      <div className='down-register' id="order">
        <Register />
      </div>
    </main>
  );
}