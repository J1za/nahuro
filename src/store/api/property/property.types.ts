type Coordinates = {
  lat: number;
  lng: number;
};

export type Property = {
  id: number;
  country: string;
  city: string;
  type: string;
  status: string;
  name: string;
  valueAdd: number;
  equity: number;
  irr: number;
  coc: number;
  details: string;
  preview: string;
  photos: string[];
  tokenPrice: number;
  totalTokens: number;
  boughtTokens: number;
  sqrt: number;
  constructionProgress: number;
  class: number;
  equityMultiple: number;
  coordinates: Coordinates;
  favorite: boolean;
  earth: boolean;
};

export type PropertyRequestParams = {
  country?: string;
  type?: string;
  irr?: number;
  coc?: number;
  status?: string;
};
