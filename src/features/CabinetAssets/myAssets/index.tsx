import PropertyCard from '../../../components/PropertyCard/PropertyCard';
import Filter from '../../../components/Filter/Filter';
import { ReactComponent as EyeIcon } from '../../../assets/icons/Eye.svg';
import './myAssets.scss';

import { Grid } from '@mui/material';

const MyAssets = () => {
  return (
    <>
      <div className="block-head">
        <h1 className="page-title">My assets</h1>
      </div>

      <div className="assets">
        <div className="assets-toggler">
          <span>Your assets</span>
          <EyeIcon />
        </div>
        <div className="assets-list">
          <div className="asset">
            <div className="asset-title">Total value of property portfolio</div>
            <div className="asset-value">$322,745.45</div>
            <div className="asset-annotation">
              <span>+$25,768,87 (21.43%)</span>
              for all time
            </div>
          </div>
          <div className="asset">
            <div className="asset-title">You earned</div>
            <div className="asset-value">$322,745.45</div>
            <div className="asset-annotation">for all time</div>
          </div>
        </div>
      </div>

      <Filter onSubmit={data => {}} />

      <div className="property-list">
        <Grid container spacing={4}>
          {Array(6).fill(
            <Grid item xs={12} sm={6} md={4}>
              <PropertyCard />
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

export default MyAssets;
