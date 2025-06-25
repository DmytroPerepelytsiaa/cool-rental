import { Point } from 'geojson';

export interface Rental {
  id: string;
  name: string;
  description: string;
  price: number;
  location: string;
  geometry: Point;
  image: string;
}
