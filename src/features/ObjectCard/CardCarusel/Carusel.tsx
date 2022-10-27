import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';

import { ReactComponent as ArrowRightSlider } from '../../../assets/icons/ArrowRightSlider.svg';
import { ReactComponent as ArrowLeftSlider } from '../../../assets/icons/ArrowLeftSlider.svg';
import { ReactComponent as X36I } from '../../../assets/icons/sliderObjectCard/_x36_.svg';
import { ReactComponent as SlowVideo } from '../../../assets/icons/sliderObjectCard/SlowVideo.svg';
import { ReactComponent as PhotoCamera } from '../../../assets/icons/sliderObjectCard/photoCamera.svg';

import './cardCarusel.scss';
import ButtonMUI from '../../../components/ButtonMUI';
import useWindowDimensions from 'helpers/useWindowDimensions';

import { CaruselObjectCardProps } from '../types';

const CaruselObjectCard: FC<CaruselObjectCardProps> = ({ name, city, status, photos }) => {
  const { width } = useWindowDimensions();
  return (
    <div className="card-carusel">
      <div className="card-carusel_info">
        <Carousel
          className="card-carusel_slider"
          height={width > 1192 ? 437 : width < 1192 && width > 899 ? 470 : width < 899 ? 380 : 437}
          NextIcon={<ArrowRightSlider />}
          PrevIcon={<ArrowLeftSlider />}
          navButtonsAlwaysVisible={true}
          cycleNavigation={false}
          indicators={false}
          navButtonsProps={{
            style: {
              backgroundColor: 'transparent',
              borderRadius: 0
            }
          }}
          animation="slide"
        >
          {photos.map(photo => (
            <div className="card-carusel_bg">
              <img src={photo} alt={name} key={photo} />
            </div>
          ))}
        </Carousel>
        <div>
          <p className="card-carusel_active">{status}</p>
          <h2 className="card-carusel_name">{city}</h2>
          <h3 className="card-carusel_apartaments">{name}</h3>
        </div>
        <div className="card-carusel_buttons">
          <ButtonMUI opacity09>
            <X36I />
            EXPLORE IN METAVERSE
          </ButtonMUI>
          <ButtonMUI opacity09>
            <SlowVideo />
            watch video
          </ButtonMUI>
          <ButtonMUI opacity09>
            <PhotoCamera />
            view all photo
          </ButtonMUI>
        </div>
      </div>
    </div>
  );
};

export default CaruselObjectCard;
