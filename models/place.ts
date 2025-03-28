export class Place {
  id: string;
  title: string;
  image: string;
  address: string;
  location: { lat: number; lng: number };

  constructor(
    title: string,
    image: string,
    address: string,
    location: { lat: number; lng: number }
  ) {
    this.id = new Date().toISOString();
    this.title = title;
    this.image = image;
    this.address = address;
    this.location = location;
  }
}