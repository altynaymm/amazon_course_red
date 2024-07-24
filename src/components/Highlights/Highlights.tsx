import { useState } from 'react';
import MiniStar from '@img/star.svg';
import GroupImg from '@img/highlights-photo.webp';
import ChinaImg from '@img/china.webp';
import {
  modalData,
  ModalDataItem,
  ModalDataType,
} from '@assets/data/highlightsData';
import Modal from '../UI/Modal';
import HighlightsContent from './HighlightsContent';
import FadeInSection from '@/utils/FadeInSection';

const Highlights = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContents, setModalContents] = useState<ModalDataItem | null>(
    null,
  );

  const openModal = (contentKey: keyof ModalDataType) => {
    setModalContents(modalData[contentKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContents(null);
  };

  return (
    <div className="highlights">
        <div className="wrapper">
        <FadeInSection>
          <h4 className="highlights__title">
            Фишки <br /> Обучающий <br />
            Программы
          </h4>
          <div className="highlights-body">
            <div className="highlights-body-box">
              <div className="highlights-item">
                <HighlightsContent
                  title={'Q&A сессия и чат со мной'}
                  buttonColor={'red'}
                  starColor={'red'}
                  image={GroupImg}
                  onMoreInfoClick={() => {
                    openModal('qaSessionContent');
                  }}
                />
              </div>

              <HighlightsContent
                title={'Список товаров'}
                buttonColor={'white'}
                starColor={'white'}
                contentBackground={'long'}
                onMoreInfoClick={() => {
                  openModal('productListContent');
                }}
              />
            </div>
            <div className="highlights-body-box highlights-body-box--vertical">
              <div className="highlights-item highlights-item--horizontal ">
                <HighlightsContent
                  title={'Контакты поставщиков'}
                  buttonColor={'white'}
                  starColor={'white'}
                  contentBackground={'red'}
                  onMoreInfoClick={() => {
                    openModal('supplierContactsContent');
                  }}
                />

                <HighlightsContent
                  title={'Групповые видеозвонки'}
                  buttonColor={'black'}
                  starColor={'black'}
                  contentBackground={'black'}
                  backgroundImage={MiniStar}
                  onMoreInfoClick={() => {
                    openModal('groupCallsContent');
                  }}
                />
              </div>
              <div className="highlights-item highlights-item--double">
                <HighlightsContent
                  title={'Контакты логистов'}
                  starColor={'red'}
                  onMoreInfoClick={() => {
                    openModal('logisticsContactsContent');
                  }}
                  image={ChinaImg}
                />
              </div>
            </div>
          </div>
        </FadeInSection>
        </div>
        {isModalOpen && modalContents && (
          <Modal
            title={modalContents.title}
            text={modalContents.text}
            onClose={closeModal}
          />
        )}
      </div>
  );
};

export default Highlights;
