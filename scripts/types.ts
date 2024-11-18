export enum Diet {
  Omnivore = "Omnivore",
  Carnivore = "Carnivore",
  Crustaceans = "Crustaceans",
}

export interface Fish {
  name: string;
  species: string;
  length: number;
  location: string;
  diet: Diet;
  image?: string; // Optional field
}

export interface Tip {
  topic: string;
  text: string;
}

export interface Location {
  name: string;
  country: string;
  description: string;
}
