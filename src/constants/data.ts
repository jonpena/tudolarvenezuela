import { CardInterface } from '../interfaces/card.interface';
import moment from 'moment';
import { ConvertDateES2En } from '../utils/utils';

export const InitialData: CardInterface[] = [
  {
    title: 'Banco Central',
    image: './images/BCV.webp',
    price: 'isLoading',
    fecha: '',
  },
  {
    title: 'Dolar Paralelo',
    image: './images/dolarParalelo.webp',
    price: 'isLoading',
    fecha: '',
  },
  {
    title: 'Dolar Today',
    image: './images/dolarToday.webp',
    price: 'isLoading',
    fecha: '',
  },
  {
    title: 'Monitor Dolar',
    image: './images/dolarMonitor.webp',
    price: 'isLoading',
    fecha: '',
  },
];

export const updateData = (dolarPrices: any) => {
  const newfecha1 = moment(dolarPrices.createdAt).format('hh:mm A DD/MM/YYYY');

  return [
    {
      title: 'Banco Central',
      image: './images/BCV.webp',
      price: dolarPrices ? dolarPrices[2] : 'isLoading',
      fecha: newfecha1,
    },
    {
      title: 'Dolar Bitcoin',
      image: './images/bitcoin.webp',
      price: dolarPrices ? dolarPrices[4] : 'isLoading',
      fecha: newfecha1,
    },
    {
      title: 'Dolar Today',
      image: './images/dolarToday.webp',
      price: dolarPrices ? dolarPrices[0] : 'isLoading',
      fecha: newfecha1,
    },
    {
      title: 'Dolar Cucuta',
      image: './images/dolarMonitor.webp',
      price: dolarPrices ? dolarPrices[6] : 'isLoading',
      fecha: newfecha1,
    },
  ];
};
