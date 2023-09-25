import './Opinion.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import peopleFromServer from './../../../assets/data/data.json';

export const Opinion = () => {
  return (
    <div className='opinion' id="opinion">
      <h3>Opinie</h3>
      <Swiper
        pagination={true} 
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {peopleFromServer.map(person => (
          <SwiperSlide key={person.id} className='slider'>
            <img src={person.img} />
            <h4>
              {person.name}
            </h4>
            <span>
              {person.year} - {person.city}
            </span>
            <p>
              {person.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}