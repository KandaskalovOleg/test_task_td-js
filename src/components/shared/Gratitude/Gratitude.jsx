/* eslint-disable react/no-unknown-property */
import './Gratitude.scss'
import gratitudeSrc from './../../../assets/images/gratitude.jpg';

export const Gratitude = () => {

  return (
    <div className='gratitude'>
      <h2>Dzięki wsparciu </h2>
      <img src={gratitudeSrc} alt="thank you image" />
      <div className='video-container'>
      <iframe src="https://www.youtube.com/embed/4KqBCfqTm3c?si=DSp1io3vztKP0Pco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}
