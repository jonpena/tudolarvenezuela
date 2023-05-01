import { useEffect, useState } from 'react';
import { InitialData, updateData } from '../constants/data';
import { URI_API_AWS, URI_API_DOLARTODAY } from '../config/config';
import { dataFetching } from '../fetcher/dataFetching';
import useSWR from 'swr';
import Card from './Card';
import { CardInterface } from '../interfaces/card.interface';

const ListCards = () => {
  const [prices, setPrices] = useState(InitialData);

  const { data: dolarPrices, isLoading: isLoadingPrices } = useSWR(
    URI_API_AWS,
    dataFetching,
    { revalidateOnFocus: false, revalidateOnMount: true }
  );

  const { data: dolarToday, isLoading: isLoadingDolarToday } = useSWR(
    URI_API_DOLARTODAY,
    dataFetching,
    { revalidateOnFocus: false, revalidateOnMount: true }
  );

  useEffect(() => {
    if (!isLoadingPrices || !isLoadingDolarToday) {
      setPrices(updateData(dolarPrices, dolarToday));
    }
  }, [dolarPrices, dolarToday]);

  return (
    <section className='max-w-7xl mt-20 mx-auto px-14 mb-16 py-8 grid grid-auto-fluid place-items-center  gap-10'>
      {prices.map((card: CardInterface) => (
        <Card key={card.image} card={card} />
      ))}
    </section>
  );
};

export default ListCards;
