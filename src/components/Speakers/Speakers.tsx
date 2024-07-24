import data from '@assets/data/speakersData';
import SpeakerCard from './SpeakerCard';
import FadeInSection from '@/utils/FadeInSection';

const Speakers = () => {
  return (
    <FadeInSection>
      <div className="speakers">
        <div className="wrapper">
          <div className="speakers-header">
            <h4 className="speakers-header__title">
              Наши <br /> спикеры 👨🏻‍💻
            </h4>
            <p className="speakers-header__sub">Давайте знакомиться</p>
          </div>
          <div className="speakers-cards">
            {data.map(el => (
              <SpeakerCard
                name={el.name}
                image={el.image}
                details={el.details}
              />
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Speakers;
