import { FC } from 'react';
import './objectCardinfo.scss';

// import { ReactComponent as ShoppingCart } from '../../../assets/icons/ShopingCart.svg';
// import exploreImage from '../../../assets/images/ExploreImage.jpg';
// import mapGoogle from '../../../assets/images/mapGoogle.jpg';
// import officePlan3D from '../../../assets/images/office-3d-floor-plan.png';

// import ButtonMUI from '../../../components/ButtonMUI';

import PropertyHighlights from './PropertyHighlights';
import InvestmentSummaryCard from './InvestmentSummary';
// import ObjectCardinfoBackers from './ObjectCardinfoBackers';
// import PhotoVideoReport from './PhotoVideoReport';
// import InvestNFTBundle from './InvestNFTBundle';

import { ObjectCardinfoProps } from '../types';

const ObjectCardinfo: FC<ObjectCardinfoProps> = ({
  details,
  type,
  sqrt,
  class: classVal,
  totalPriceUI,
  tokenPriceUI,
  cocUI,
  irrUI,
  equityMultiple,
  totalTokensUI,
  tokensLeftUI
}) => {
  return (
    <div className="obj-cardinfo">
      <div className="pl47 bb1">
        <PropertyHighlights type={type} sqrt={sqrt} class={classVal} />
        <InvestmentSummaryCard
          totalPriceUI={totalPriceUI}
          tokenPriceUI={tokenPriceUI}
          cocUI={cocUI}
          irrUI={irrUI}
          equityMultiple={equityMultiple}
          totalTokensUI={totalTokensUI}
          tokensLeftUI={tokensLeftUI}
        />
      </div>
      <div className="obj-cardinfo_about pl47">
        <h3>About</h3>
        <p>{details}</p>
      </div>
      {/* <ObjectCardinfoBackers />
      <ButtonMUI className="obj-cardinfo_tokensbuy">
        <ShoppingCart />
        buy tokens
      </ButtonMUI>
      <div className="pl47">
        <PhotoVideoReport />
      </div> */}
      {/* <div className="obj-cardinfo_developer pl47">
        <h3>Developer</h3>
        <p>
          <img src={devImage} alt="developer" /> EXAMPLE GROUP
        </p>
        <PropertyHighlights />
      </div> */}
      {/* <InvestNFTBundle /> */}
      {/* <div className="obj-cardinfo_metaverse">
        <h2>Explore this Property in Metaverse</h2>
        <div className="obj-cardinfo_metaverse_bg">
          <img src={exploreImage} alt="exploreImage" />
        </div>
        <ButtonMUI style={{ maxWidth: '299px' }} transparentButton>
          EXPLORE
        </ButtonMUI>
      </div> */}
      {/* <div className="obj-cardinfo_about pl47">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.
        </p>
        <br />
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
          form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      </div> */}
      {/* <div className="obj-cardinfo_map">
        <img src={mapGoogle} alt="map" />
      </div> */}
      {/* <div className="obj-cardinfo_about pl47">
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
          form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      </div>
      <div className="obj-cardinfo_about obj-cardinfo_image">
        <img src={officePlan3D} alt="" />
      </div> */}
    </div>
  );
};

export default ObjectCardinfo;
