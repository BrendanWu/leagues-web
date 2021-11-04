export interface IHomeUser {
  name: string;
  email: string;
  password: string;
  _id: string;
}

export interface MapData {
  _id: number;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    Hoursofoperation: string;
  };
  description: string;
  location: { longitude: number; latitude: number };
  title: string;
  website: string;
  imageUrl: string;
}
