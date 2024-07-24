import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import data from '@assets/data/carouselData';
import Carousel from './UI/Carousel';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Arrow from './UI/Arrow';
import { useState } from 'react';
import Modal from './UI/Modal';
import FadeInSection from '@/utils/FadeInSection';

const Steps = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', details: '' });

  const openModal = (title: string, details: string) => {
    setModalContent({ title, details });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({ title: '', details: '' });
  };
  return (
    <FadeInSection>
      <div className="steps">
        <div className="wrapper">
          <div className="steps-header">
            <h4 className="steps-header__title">Программа</h4>
            <div className="steps-header-navigation">
              <div className="swiper-button__prev">
                <Arrow color="red" />
              </div>
              <div className="swiper-button__next">
                <Arrow color="red" />
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            modules={[Pagination, Navigation, Autoplay]}
            grabCursor
            slidesPerView={1.25}
            centeredSlides
            navigation={{
              nextEl: '.swiper-button__next',
              prevEl: '.swiper-button__prev',
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              720: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 3,
                centeredSlides: false,
              },
            }}
          >
            {data.map(el => (
              <SwiperSlide key={el.id}>
                <Carousel
                  id={el.id}
                  title={el.title}
                  desc={el.description}
                  img={el.image}
                  openModal={() => openModal(el.title, el.text)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {isModalOpen && (
          <Modal
            title={modalContent.title}
            text={modalContent.details}
            onClose={closeModal}
          />
        )}
      </div>
    </FadeInSection>
  );
};

export default Steps;
