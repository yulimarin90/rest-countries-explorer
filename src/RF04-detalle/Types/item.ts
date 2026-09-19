export interface Area {
  kilometers: number
  miles: number
}

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
  area: Area
  
}

export interface CountriesResponse {
  data: {
    objects: Item[]
  }
}
