

export interface Language {
  name: string
  native_name: string
  iso639_1: string
  iso639_2: string
  iso639_3: string
}

export interface Capital {
  name: string
  coordinates: {
    latitude: number
    longitude: number
  }
  attributes: {
    primary: boolean
    constitutional: boolean
    administrative: boolean
    executive: boolean
    legislative: boolean
    judicial: boolean
  }
}

export interface Item {
  names: {
    common: string
  }
  region: string
  languages: Language[]
  capitals: Capital[]
}

export interface CountriesResponse {
  data: {
    objects: Item[]
  }
}