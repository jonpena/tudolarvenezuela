import { CardInterface } from '../interfaces/card.interface';
import { format } from 'date-fns';

export const InitialData: CardInterface[] = [
  {
    title: 'Banco Central',
    image: './images/BCV.webp',
    price: undefined,
    fecha: '',
  },
  {
    title: 'Dolar Today',
    image: './images/dolarToday.webp',
    price: undefined,
    fecha: '',
  },
  {
    title: 'Monitor Dolar',
    image: './images/dolarMonitor.webp',
    price: undefined,
    fecha: '',
  },
  {
    title: 'Bitcoin',
    image: './images/bitcoin.webp',
    price: undefined,
    fecha: '',
  },
];

type PricesPros = {
  name: string;
  price: string;
};

export const updateData = (prices: PricesPros[]) => {
  const date = format(new Date(), 'hh:mm a dd/MM/yyyy');

  return [
    {
      title: 'Banco Central',
      image: './images/BCV.webp',
      price: prices ? prices[0].price : 'isLoading',
      fecha: date,
    },
    {
      title: prices[1].name,
      image: './images/dolarToday.webp',
      price: prices ? prices[1].price : 'isLoading',
      fecha: date,
    },
    {
      title: prices[2].name,
      image: './images/dolarMonitor.webp',
      price: prices ? prices[2].price : 'isLoading',
      fecha: date,
    },
    {
      title: prices[3].name,
      image: './images/bitcoin.webp',
      price: prices ? prices[3].price : 'isLoading',
      fecha: date,
    },
  ];
};
