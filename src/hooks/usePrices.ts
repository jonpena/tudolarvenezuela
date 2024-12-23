import useSWR from 'swr';
import { GET_PRICES_AWS } from '../config/config';
import { dataFetching } from '../fetcher/dataFetching';

export const usePrices = () => {
  return useSWR(GET_PRICES_AWS, dataFetching, {
    revalidateOnMount: true,
    revalidateIfStale: false,
  });
};
