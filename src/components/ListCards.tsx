import { useEffect, useState } from 'react';
import { constantData } from '../constants/data';
import { connectionUrl } from '../config/config';
import { dataFetching } from '../fetcher/dataFetching';
import useSWR from 'swr';
import moment from 'moment';
import Card from './Card';
import { ConvertValue } from '../utils/utils';

const ListCards = () => {
  const [date, setDate] = useState<string>();
  const { data, isLoading } = useSWR(connectionUrl, dataFetching, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    if (!isLoading) {
      const newDate = data && moment(data.createdAt);
      const FormatDate = newDate.format('hh:mm A DD/MM/YYYY');
      setDate(FormatDate);
    }
  }, [isLoading]);

  return (
    <section className='max-w-7xl mt-20 mx-auto px-14 mb-16 py-8 grid grid-auto-fluid place-items-center gap-12 gap-y-8'>
      {constantData.map((card, i) => (
        <Card
          key={card.image}
          card={card}
          price={!isLoading && ConvertValue(data?.prices[i])}
          date={!isLoading && String(date)}
        />
      ))}
    </section>
  );
};

export default ListCards;
