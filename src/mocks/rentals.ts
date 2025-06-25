import type { Rental } from '@models/rental';

export const RENTAL_MOCKS: Rental[] = [
  {
    id: '1',
    name: 'Modern apartment in the city center',
    description:
      'This cozy modern apartment is located in the very heart of Kyiv, offering walking-distance access to shops, restaurants, historical monuments, and nightlife. The space is fully equipped with high-speed internet, a fully functional kitchen, smart TV, and a king-sized bed. Designed in a minimalist style, it’s perfect for business travelers, couples, or digital nomads. Large windows provide plenty of natural light throughout the day, and the building has a secure entry and 24/7 concierge.',
    price: 1200,
    location: 'Kyiv, Khreshchatyk St, 10',
    geometry: {
      type: 'Point',
      coordinates: [30.5234, 50.4501],
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  },
  {
    id: '2',
    name: 'Office space',
    description:
      'Spacious office space situated in the business district of Lviv, this rental is ideal for small companies, startups, or freelancers looking for a quiet and professional work environment. Includes 3 separate rooms, a conference room with a whiteboard and projector, central heating, and fiber internet. Located near multiple cafes and public transport. The office is accessible 24/7 with keycard entry and features ergonomic furniture and lots of natural lighting.',
    price: 2500,
    location: 'Lviv, Pekarska St, 25',
    geometry: {
      type: 'Point',
      coordinates: [24.0316, 49.8397],
    },
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
  },
  {
    id: '3',
    name: 'Apartment near the park',
    description:
      'Located in a quiet, green neighborhood near one of Odesa’s largest parks, this apartment is perfect for people seeking tranquility. Recently renovated with modern finishes and a fully equipped kitchen. The balcony overlooks a tree-lined street, and the apartment includes a washing machine, fast Wi-Fi, and a spacious living room. The park is just a 2-minute walk away, ideal for families with kids or morning runners.',
    price: 900,
    location: 'Odesa, Deribasivska St, 15',
    geometry: {
      type: 'Point',
      coordinates: [30.7326, 46.4825],
    },
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
  },
  {
    id: '4',
    name: 'Penthouse with a sea view',
    description:
      'Luxurious penthouse overlooking the Black Sea with panoramic windows, two spacious bedrooms, a modern open-plan kitchen, and a large rooftop terrace perfect for sunbathing or hosting. Ideal for executive stays or families wanting a premium vacation spot. Located near Odesa’s Arcadia district, known for its beaches and nightlife. Includes private parking, a smart security system, and a full cleaning service upon request.',
    price: 4000,
    location: 'Odesa, Frantsuzkyi Blvd, 60',
    geometry: {
      type: 'Point',
      coordinates: [30.9521, 46.9667],
    },
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed',
  },
  {
    id: '5',
    name: 'Studio in historical center',
    description:
      'A cozy studio nestled right in Lviv’s historical Rynok Square, this apartment combines heritage architecture with modern comforts. Features exposed brick walls, oak flooring, and antique-style furniture. Includes kitchenette, washing machine, fast Wi-Fi, and smart lighting. Perfect for solo travelers or couples wanting to live in the middle of Lviv’s cultural pulse — cafés, opera, and galleries are right outside your door.',
    price: 1100,
    location: 'Lviv, Rynok Square, 1',
    geometry: {
      type: 'Point',
      coordinates: [24.3315, 49.2419],
    },
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb',
  },
  {
  id: '13',
  name: 'Mountain Cabin Retreat',
  description:
    'Escape to a rustic yet modern cabin in the Carpathian Mountains. Surrounded by forest, this retreat offers peace, hiking trails, and a wood-burning fireplace. Features full kitchen, balcony with mountain view, smart TV, and heating. Ideal for remote workers and nature lovers.',
  price: 1800,
  location: 'Yaremche, Ivano-Frankivsk Oblast',
  geometry: {
    type: 'Point',
    coordinates: [24.6886, 48.4448],
  },
  image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
},
{
  id: '14',
  name: 'Industrial-Style Loft',
  description:
    'Modern loft with raw concrete accents, steel staircase, and tall factory windows. Includes large workspace, open kitchen, rainfall shower, and fast internet. Located near coworking hubs and nightlife venues — perfect for digital nomads.',
  price: 2300,
  location: 'Kyiv, Podil District',
  geometry: {
    type: 'Point',
    coordinates: [30.5169, 50.4666],
  },
  image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
},
{
  id: '15',
  name: 'Riverside Tiny House',
  description:
    'Compact, eco-friendly tiny house located near the Dnipro River. Includes mezzanine bed, modular kitchen, composting toilet, solar panels, and hammock deck. Popular among weekend travelers and minimalists.',
  price: 850,
  location: 'Cherkasy, riverbank district',
  geometry: {
    type: 'Point',
    coordinates: [32.0595, 49.4285],
  },
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
},
{
  id: '16',
  name: 'Classic Townhouse Suite',
  description:
    'Refurbished townhouse apartment in the heart of a quiet European-style boulevard. Features large windows, acoustic insulation, king-size bed, bathtub, and vintage décor. Grocery store and public transport within 3 minutes.',
  price: 1600,
  location: 'Chernivtsi, Holovna Street, 22',
  geometry: {
    type: 'Point',
    coordinates: [25.9388, 48.2915],
  },
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
},
{
  id: '17',
  name: 'Modern High-Rise Apartment',
  description:
    'Stylish apartment on the 14th floor with panoramic city views. Equipped with air conditioning, dishwasher, walk-in closet, and balcony. Secure building with concierge, gym, and underground parking.',
  price: 2700,
  location: 'Dnipro, Shevchenko Ave, 45',
  geometry: {
    type: 'Point',
    coordinates: [35.0456, 48.4664],
  },
  image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
},
{
  id: '18',
  name: 'Cozy Room in Family House',
  description:
    'A bright and affordable private room in a family house with shared kitchen and bathroom. Includes desk, wardrobe, and free tea/coffee. Located in a quiet suburb with direct bus to the city center.',
  price: 500,
  location: 'Sumy, Zarechenskyi District',
  geometry: {
    type: 'Point',
    coordinates: [34.8021, 50.9185],
  },
  image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
},
{
  id: '19',
  name: 'Minimal Scandinavian Flat',
  description:
    'Elegant and minimalistic flat designed in Scandinavian style. Bright walls, natural wood, open-plan layout, and smart home integration. Great for design lovers looking for a calm space to live and work.',
  price: 1900,
  location: 'Khmelnytskyi, Proskurivska Street, 13',
  geometry: {
    type: 'Point',
    coordinates: [26.9997, 49.4216],
  },
  image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
  },
];
