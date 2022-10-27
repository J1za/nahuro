import { FC } from 'react';
import { GradientProgress } from 'components/common';
import { TokensProgressProps } from './types';

import './styles.scss';

export const TokensProgress: FC<TokensProgressProps> = ({ progress, progressUI, tokensLeftUI, totalPriceUI }) => {
  return (
    <>
      <GradientProgress progress={progress} />
      <div className="progress_inner">
        <div className="progress_info">
          <span>
            <strong>{progressUI}</strong>
          </span>
          <span>({totalPriceUI})</span>
        </div>
        <div className="progress_info">
          <span>
            <strong>{tokensLeftUI}</strong>
          </span>
          <span>Tokens left</span>
        </div>
      </div>
    </>
  );
};
