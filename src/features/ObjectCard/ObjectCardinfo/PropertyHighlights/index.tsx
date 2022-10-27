import { FC } from 'react';
import { PropertyHighlightsProps } from '../../types';
import './propertyHighlights.scss';

import { ReactComponent as Home } from '../../../../assets/icons/PropertyHighlights/home.svg';
import { ReactComponent as X36 } from '../../../../assets/icons/PropertyHighlights/x36.svg';

const PropertyHighlights: FC<PropertyHighlightsProps> = ({ type, sqrt, class: classVal }) => {
  return (
    <div className="prop-highlights">
      <div className="prop-highlights_box">
        <Home />
        <p>{type}</p>
      </div>
      <div className="prop-highlights_box">
        <Home />
        <p>Class {classVal}</p>
      </div>
      <div className="prop-highlights_box">
        <Home />
        <p>{sqrt} Sq.m</p>
      </div>
      <div className="prop-highlights_box">
        <X36 />
        <p>Metaverse version</p>
      </div>
      <div className="prop-highlights_box">
        <X36 />
        <p>NFT collection available</p>
      </div>
      <div className="prop-highlights_box">
        <X36 />
        <p>DAO voating available</p>
      </div>
    </div>
  );
};

export default PropertyHighlights;
