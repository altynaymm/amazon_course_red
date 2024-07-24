import { tariffs } from '@assets/data/tariffData';
import TariffCard from './TariffCard';
import Button from '../UI/Button';

const Tariff = () => {
  return (
    <div className="tariff">
      <div className="wrapper">
        <h4 className="tariff__title">Тарифы</h4>
        <div className="tariff-body">
          {tariffs.map((el, id) => (
            <TariffCard
              id={id}
              oldPrice={el.oldPrice}
              price={el.price}
              services={el.services}
              img={el.img}
              name={el.name}
              primaryColor={el.primaryColor}
              secondaryColor={el.secondaryColor}
              subtitle={el.subtitle}
            />
          ))}
        </div>
        <Button
          title={'Рассрочка Kaspi Red 0-0-24'}
          primaryColor="#FFFFFF"
          secondaryColor="#F13010"
          arrowColor="#F13010"
          onClick={() => null}
        ></Button>
      </div>
    </div>
  );
};

export default Tariff;
