import { useEffect, useState } from 'react';
import { constantData } from '../constants/data';
import { connectionUrl } from '../config/config';
import { dataFetching } from '../fetcher/dataFetching';
import useSWR from 'swr';
import moment from 'moment';
import Card from './Card';

const ListCards = () => {
  const [date, setDate] = useState<string>();
  const { data: response, isLoading } = useSWR(connectionUrl, dataFetching);

  useEffect(() => {
    if (!isLoading) {
      const newDate = response && moment(response.createdAt);
      const FormatDate = newDate.format('hh:mm A DD/MM/YYYY');
      setDate(FormatDate);
    }
  }, [isLoading]);

  return (
    <section className='max-w-7xl mt-20 mx-auto px-14 mb-16 py-8 grid grid-auto-fluid place-items-center  gap-10'>
      {constantData.map((card, i) => (
        <Card
          key={card.image}
          card={card}
          price={!isLoading && response?.prices[i]}
          date={!isLoading && String(date)}
          isLoading={isLoading}
        />
      ))}
    </section>
  );
};

export default ListCards;
