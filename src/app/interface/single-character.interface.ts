export interface SingleCharacter {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  string;
}
export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}
export enum Species {
  Alien = "Alien",
  Human = "Human",
}
export interface Location {
  name: string;
  url:  string;
}
