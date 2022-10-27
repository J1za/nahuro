import { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { PrimaryCardProps } from '../../types';
import { LinearProgress } from 'components/common';

import './styles.scss';

export const PrimaryCard: FC<PrimaryCardProps> = ({
  id,
  preview,
  name,
  type,
  city,
  details,
  irrUI,
  cocUI,
  valueAddUI,
  equityUI,
  progress,
  progressUI,
  minified
}) => {
  return (
    <div className="offer-card">
      <div className="offer-card-inner">
        {/* <button className="offer-card-favourite">
          <svg>
            <use xlinkHref="#icon-heart"></use>
          </svg>
        </button> */}
        <Link to={`/properties/${id}`}>
          <div className="offer-card-photo">
            <img src={preview} alt="" loading="lazy" />

            <div className="offer-card-funded">
              <div className="offer-card-propgress-wrapper">
                <LinearProgress className="offer-card-propgress-bar" variant="determinate" value={progress} />
                <span className="offer-card-propgress-label">{progressUI} funded</span>
              </div>
            </div>
          </div>
        </Link>

        <div className="offer-card-info">
          <div className="offer-card-category">{type}</div>
          <div className="offer-card-location">{city}</div>
          <div className="offer-card-title">{name}</div>
          {!minified && (
            <div className="offer-card-params">
              <span>VALUE-ADD {valueAddUI}</span>
              <span>EQUITY {equityUI}</span>
            </div>
          )}
        </div>
      </div>

      {!minified && (
        <div className="offer-card-stats">
          <div className="stat-item">
            <div className="stat-item-title">Target IRR*</div>
            <div className="stat-item-value">{irrUI}</div>
          </div>
          <div className="stat-item">
            <div className="stat-item-title">Target Cash on Cash*</div>
            <div className="stat-item-value">{cocUI}</div>
          </div>
        </div>
      )}

      {!minified && (
        <div className="offer-card-descr">
          <div className="descr-title">details:</div>
          {details?.slice(0, 100)}
          {details && details.length > 100 ? '...' : ''}
          {/* <button className="descr-more">MORE</button> */}
        </div>
      )}
      <div className="offer-card-details">
        <Button component={Link} to={`/properties/${id}`} variant="contained" color="primary">
          Details
        </Button>
      </div>
    </div>
  );
};
