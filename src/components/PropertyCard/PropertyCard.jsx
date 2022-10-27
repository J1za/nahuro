import Btn from '../ButtonMUI';
import offerCard from '../../temp/offer-card.jpg';

export default function PropertyCard() {
  return (
    <div className="property-card">
      <div className="property-card-label active">Active</div>
      {/* <div className="property-card-label">No Active</div> */}
      <div className="property-card-photo">
        <img src={offerCard} alt="card" />
        <div className="property-card-overlay"></div>
        <div className="property-card-params">
          <div className="param-item">
            <div className="param-item-title">Minimum</div>
            <div className="param-item-value">$50</div>
          </div>
          <div className="param-item">
            <div className="param-item-title">IRR</div>
            <div className="param-item-value">69.9%</div>
          </div>
          <div className="param-item">
            <div className="param-item-title">CASH YIELD</div>
            <div className="param-item-value">8.3%</div>
          </div>
        </div>
      </div>
      <div className="property-card-info">
        <div className="info-head">
          <div className="info-head-column">
            <div className="property-card-location">BEAVERTON, OX</div>
            <div className="property-card-title">The Huntley Apartaments</div>
          </div>

          {/* for marketplace only */}
          <div className="info-head-column">
            <div className="property-card-details">
              <Btn text="Details" />
            </div>
          </div>
        </div>

        <div className="price">
          <div className="price-title">Price</div>
          <div className="price-value">$300,000,00</div>
        </div>

        {/* for cabinet only */}
        <div className="tokens">
          <div className="tokens-title">Number of tokens</div>
          <div className="tokens-value">100,249</div>
        </div>

        {/* <div className="property-card-progress">
          <LinearProgressMUI smallProgress />
        </div> */}

        <div className="property-card-buy">
          <Btn text="buy tokens" />
        </div>
      </div>
    </div>
  );
}
