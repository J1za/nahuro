import { FC } from 'react';
import { Earth } from 'components/Earth';

export const BlockPlanet: FC<{}> = () => (
  <div>
    <section className="block-planet">
      <div className="container wide">
        <div className="planet-locations">
          <div className="bg">
            <img src="img/planet-bg.jpg" alt="" />
          </div>
          <div className="text">
            <h1>INVESTING IN FRACTIONAL OWNERSHIP OF COMMERCIAL PROPERTY HAS NEVER BEEN EASIER</h1>
            <div className="descr">
              Powered by <span><strong>WEB 3.0</strong></span> Technology real estate tokenization helps real estate developers raise capital more
              efficiently, and give investors unprecedented access to private real estate investments, transparency and
              liquidity.
            </div>
          </div>
          {/* <div className="planet"> */}
          <Earth />
          {/* </div> */}
        </div>
      </div>
    </section>
  </div>
);
