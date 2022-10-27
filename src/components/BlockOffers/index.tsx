import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { PropertyCard } from 'features/property';
import { useGetFavoritePropertiesQuery } from 'store';

import './blockOffers.scss';

export const BlockOffers = () => {
  const { data = [] } = useGetFavoritePropertiesQuery(6);
  return (
    <div>
      <section className="block-offers">
        <div className="container">
          <div className="block-head">
            <h2 className="block-title">TOP offers for you</h2>
            <Button type="submit" color="secondary" component={Link} to="/properties">
              see all
            </Button>
          </div>

          <div className="offers-list">
            <Grid container spacing={4}>
              {data.map(item => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <PropertyCard data={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </section>
    </div>
  );
};
