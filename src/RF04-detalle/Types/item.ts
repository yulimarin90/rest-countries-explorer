export interface Language {
  name: string
}

export interface Capital {
  name: string
}

export interface Item {
  names: {
    common: string
  }
  region: string
  languages?: Language[]
  capitals?: Capital[]
}

export interface CountriesResponse {
  data: {
    objects: Item[]
  }
}