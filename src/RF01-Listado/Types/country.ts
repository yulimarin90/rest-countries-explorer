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

export interface Country {
 names: {
    common: string; // objeto
  };
  region: string; // texto
  capitals?: Capital[]; // arreglo de objetos, es opcional
  languages?: Language[]; // texto, opcional
}

export interface CountriesResponse {
  data: {
    objects: Country[];
  };
}

//estructura de la api:
// data es un objeto.
//objects es un arreglo.
//Cada elemento de objects es un Country.