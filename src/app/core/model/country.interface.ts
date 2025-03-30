export interface ICountryByRegionInfo {
  name: {
    common: string;
    nativeName?: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
    official: string;
  };
  population: number;
  subregion?: string;
}
