import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { propertyApi } from './api/property/property.api';

export const store = configureStore({
  reducer: { [propertyApi.reducerPath]: propertyApi.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(propertyApi.middleware)
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStore, unknown, Action<string>>;
