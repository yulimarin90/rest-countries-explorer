export interface Country {
  names: {
    common: string;
  };
}

export interface CountriesResponse {
  data: {
    objects: Country[];
  };
}