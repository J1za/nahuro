import CaruselObjectCard from './CardCarusel/Carusel';
// import ReturnBtn from '../../components/ReturnBtn';
import './objectCardPage.scss';
import TabsMUI from '../../components/TabsMUI';

import InvestmentOpportunity from './InvestmentOpportunity';
import CurrentBalanceCard from './CurrentBalance';
// import InvestBundleCollectionCard from './InvestBundleCollection';
import ObjectCardinfo from './ObjectCardinfo';
import { usePropertyData } from '../property/usePropertyData';
// import { GradientProgress, GradientProgressSize } from 'components/common';

import { ObjectCardPageComponentProps } from './types';

export const ObjectCardPageComponent: ObjectCardPageComponentProps = ({ data }) => {
  const item = usePropertyData(data);

  return (
    <section className="object-card">
      <div className="container">
        {/* <ReturnBtn text="back to main" /> */}

        <div className="object-card__inner">
          <div className="object-card_left">
            <CaruselObjectCard status={item.status} name={item.name} city={item.city} photos={item.photos} />
            {/* <div className="object-card_progress">
              <div className="object-card_progress-info">
                <h3>Construction progress</h3>
                <h2>{item.constructionProgressUI}</h2>
              </div>
              <GradientProgress progress={item.constructionProgress} size={GradientProgressSize.Large} />
            </div> */}
            <div className="object-card_tabs">
              <TabsMUI>
                {' '}
                <ObjectCardinfo
                  details={item.details}
                  type={item.type}
                  sqrt={item.sqrt}
                  class={item.class}
                  totalPriceUI={item.totalPriceUI}
                  tokenPriceUI={item.tokenPriceUI}
                  cocUI={item.cocUI}
                  irrUI={item.irrUI}
                  equityMultiple={item.equityMultiple}
                  totalTokensUI={item.totalTokensUI}
                  tokensLeftUI={item.tokensLeftUI}
                />
              </TabsMUI>
            </div>
          </div>
          <div className="object-card_right">
            <InvestmentOpportunity
              totalPriceUI={item.totalPriceUI}
              irrUI={item.irrUI}
              cocUI={item.cocUI}
              tokenPriceUI={item.tokenPriceUI}
              tokensLeftUI={item.tokensLeftUI}
              tokenPrice={item.tokenPrice}
              progress={item.progress}
              progressUI={item.progressUI}
            />
            <div className="object-card_right_wrapper">
              <CurrentBalanceCard />
              {/* <InvestBundleCollectionCard /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
