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

export const updateData = (dolarPrices: any, dolarToday: any) => {
  const newfecha1 = dolarPrices
    ? moment(dolarPrices.createdAt).format('hh:mm A DD/MM/YYYY')
    : '';

  const newfecha2 = dolarToday
    ? ConvertDateES2En(dolarToday._timestamp.fecha)
    : '';

  return [
    {
      title: 'Banco Central',
      image: './images/BCV.webp',
      price: dolarPrices ? dolarPrices.prices[0] : 'isLoading',
      fecha: newfecha1,
    },
    {
      title: 'Dolar Paralelo',
      image: './images/dolarParalelo.webp',
      price: dolarPrices ? dolarPrices.prices[1] : 'isLoading',
      fecha: newfecha1,
    },
    {
      title: 'Dolar Today',
      image: './images/dolarToday.webp',
      price: dolarToday
        ? String(dolarToday.USD.dolartoday).replace('.', ',')
        : 'isLoading',
      fecha: newfecha2,
    },
    {
      title: 'Monitor Dolar',
      image: './images/dolarMonitor.webp',
      price: dolarPrices ? dolarPrices.prices[3] : 'isLoading',
      fecha: newfecha1,
    },
  ];
};
