

export interface Language {
  bcp47: string;
  iso639_1: string;
  iso639_2b: string;
  iso639_2t: string;
  iso639_3: string;
  name: string;
  native_name: string;
}

export interface Capital {
  attributes: {
    administrative: boolean;
    constitutional: boolean;
    executive: boolean;
    judicial: boolean;
    legislative: boolean;
    primary: boolean;
  };

  coordinates: {
    lat: number;
    lng: number;
  };

  name: string;
}

export interface Item {
  names: {
    common: string;
  }
  region: string;
  languages?: Language[];
  capitals?: Capital[];
}

export interface CountriesResponse {
  data: {
    objects: Item[];
  }
}