import { useEffect, useState } from 'react';
import { InitialData, updateData } from '../constants/data';
import Card from './Card';
import { CardInterface } from '../interfaces/card.interface';
import { usePrices } from '../hooks/usePrices';

const ListCards = () => {
  const [prices, setPrices] = useState(InitialData);
  const { data } = usePrices();

  useEffect(() => {
    if (data) {
      setPrices(updateData(data));
    }
  }, [data]);

  return (
    <section className='max-w-7xl mt-20 mx-auto px-14 mb-16 py-8 grid grid-auto-fluid place-items-center gap-10'>
      {prices.map((card: CardInterface) => (
        <Card key={card.image} card={card} />
      ))}
    </section>
  );
};

export default ListCards;
