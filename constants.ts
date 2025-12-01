import { Car, CarCategory } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    name: 'Lamborghini Huracán Evo',
    category: CarCategory.SPORT,
    pricePerDay: 3500,
    specs: { hp: 640, zeroToSixty: 2.9, maxSpeed: 325 },
    imageUrl: '/images/lamborghinihuracan.png',
    available: true
  },
  {
    id: '2',
    name: 'Rolls-Royce Cullinan',
    category: CarCategory.SUV,
    pricePerDay: 4200,
    specs: { hp: 563, zeroToSixty: 5.2, maxSpeed: 250 },
    imageUrl: 'https://picsum.photos/seed/rolls/800/600',
    available: true
  },
  {
    id: '3',
    name: 'Mercedes-Benz S-Class Maybach',
    category: CarCategory.SEDAN,
    pricePerDay: 2100,
    specs: { hp: 496, zeroToSixty: 4.8, maxSpeed: 250 },
    imageUrl: 'https://picsum.photos/seed/merc/800/600',
    available: true
  },
  {
    id: '4',
    name: 'Ferrari F8 Tributo',
    category: CarCategory.SPORT,
    pricePerDay: 3800,
    specs: { hp: 710, zeroToSixty: 2.9, maxSpeed: 340 },
    imageUrl: 'https://picsum.photos/seed/ferrari/800/600',
    available: true
  },
  {
    id: '5',
    name: 'Bentley Continental GT',
    category: CarCategory.CONVERTIBLE,
    pricePerDay: 2800,
    specs: { hp: 650, zeroToSixty: 3.6, maxSpeed: 335 },
    imageUrl: 'https://picsum.photos/seed/bentley/800/600',
    available: false
  },
  {
    id: '6',
    name: 'Porsche 911 Turbo S',
    category: CarCategory.SPORT,
    pricePerDay: 2900,
    specs: { hp: 640, zeroToSixty: 2.7, maxSpeed: 330 },
    imageUrl: 'https://picsum.photos/seed/porsche/800/600',
    available: true
  },
    {
    id: '7',
    name: 'Mercedes EQS',
    category: CarCategory.SPORT,
    pricePerDay: 1800,
    specs: { hp: 440, zeroToSixty: 4.7, maxSpeed: 320 },
    imageUrl: '/images/mbeqs.png',
    available: true
  },
];

export const AI_SYSTEM_INSTRUCTION = `
Ты - профессиональный консьерж элитного автопроката "EliteDrive" в Минске, Беларусь.
Твоя задача - помогать клиентам выбрать идеальный автомобиль из нашего автопарка.
Наш автопарк включает: Lamborghini Huracán, Rolls-Royce Cullinan, Mercedes Maybach, Ferrari F8, Bentley Continental GT, Porsche 911.
Будь вежлив, используй деловой, но приветливый тон. Предлагай авто на основе потребностей (скорость, комфорт, статус, для свидания, для встречи).
Цены указаны в белорусских рублях (BYN) за сутки.
Отвечай кратко и по делу, на русском языке.
Если спрашивают адрес - Минск, пр-т Победителей 7а.
`;
