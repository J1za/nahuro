import { FC } from 'react';
import Btn from 'components/ButtonMUI';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { SecondaryCardProps } from '../../types';
import { TokensProgress } from '../TokensProgress';

import './styles.scss';

export const SecondaryCard: FC<SecondaryCardProps> = ({
  id,
  preview,
  tokenPriceUI,
  name,
  city,
  irrUI,
  cocUI,
  totalPriceUI = '',
  progress = 0,
  status,
  tokensLeftUI = '',
  progressUI = ''
}) => {
  return (
    <div className="property-card">
      <div className="property-card-label active">{status}</div>
      <Link to={`/properties/${id}`}>
        <div className="property-card-photo">
          <img src={preview} alt="card" />
          <div className="property-card-overlay"></div>
          <div className="property-card-params">
            <div className="param-item">
              <div className="param-item-title">Minimum</div>
              <div className="param-item-value">{tokenPriceUI}</div>
            </div>
            <div className="param-item">
              <div className="param-item-title">IRR</div>
              <div className="param-item-value">{irrUI}</div>
            </div>
            <div className="param-item">
              <div className="param-item-title">CASH YIELD</div>
              <div className="param-item-value">{cocUI}</div>
            </div>
          </div>
        </div>
      </Link>

      <div className="property-card-info">
        <div className="info-head">
          <div className="info-head-column">
            <div className="property-card-location">{city}</div>
            <div className="property-card-title">{name}</div>
          </div>

          <div className="info-head-column">
            <div className="property-card-details">
              <Button component={Link} to={`/properties/${id}`} variant="contained" color="primary">
                Details
              </Button>
            </div>
          </div>
        </div>

        <div className="price">
          <div className="price-title">Price</div>
          <div className="price-value">{totalPriceUI}</div>
        </div>

        {/* <div className="tokens">
          <div className="tokens-title">Number of tokens</div>
          <div className="tokens-value">{totalTokensUI}</div>
        </div> */}

        <div className="property-card-progress">
          <TokensProgress
            progress={progress}
            progressUI={progressUI}
            tokensLeftUI={tokensLeftUI}
            totalPriceUI={totalPriceUI}
          />
        </div>

        <div className="property-card-buy">
          <Btn text="buy tokens" />
        </div>
      </div>
    </div>
  );
};
