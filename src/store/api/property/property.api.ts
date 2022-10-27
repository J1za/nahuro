import { Property, PropertyRequestParams } from './property.types';
import { PROPERTY, FAVORITE_PROPERTY, EARTH_PROPERTY } from '../../constants';
import { api } from '../api';

export const propertyApi = api.injectEndpoints({
  endpoints: build => ({
    getProperties: build.query<Property[], PropertyRequestParams | undefined>({
      query: params => ({ url: PROPERTY, params })
    }),
    getOneProperty: build.query<Property, number>({ query: id => `${PROPERTY}/${id}` }),
    getFavoriteProperties: build.query<Property[], number>({ query: limit => `${FAVORITE_PROPERTY}?limit=${limit}` }),
    getEarthProperties: build.query<Property[], number>({ query: limit => `${EARTH_PROPERTY}?limit=${limit}` })
  })
});

export const {
  useGetPropertiesQuery,
  useGetOnePropertyQuery,
  useGetFavoritePropertiesQuery,
  useGetEarthPropertiesQuery
} = propertyApi;
