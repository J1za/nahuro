import { useParams } from 'react-router-dom';
import { ObjectCardPageComponent } from './ObjectCardPageComponent';
import { useGetOnePropertyQuery } from 'store';
import CircularProgress from '@mui/material/CircularProgress';
import './objectCardPage.scss';

const ObjectCardPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetOnePropertyQuery(Number(id));

  return isLoading || !data ? (
    <div className="object-card-loader">
      <CircularProgress color="primary" />
    </div>
  ) : (
    <ObjectCardPageComponent data={data} />
  );
};

export default ObjectCardPage;
