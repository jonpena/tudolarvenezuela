import { CardInterface } from '../interfaces/card.interface';
import Loader from './Loader';

type CardProps = {
  card: CardInterface;
  price: string | boolean;
  date: string | boolean;
  isLoading: boolean;
};

const Card = ({ card, price, date, isLoading }: CardProps) => {
  return (
    <div className='relative w-56 h-[370px] rounded-2xl border-4 border-white-custom overflow-hidden bg-white-custom cursor-pointer transition-all ease-in-out card-wrap hover:scale-110'>
      <div className='w-full h-48 grid place-items-center card-header one'>
        <img
          className='aspect-square'
          width={120}
          height={120}
          src={card.image}
          alt={card.title}
        />
      </div>
      <div className='w-3/5 mx-auto my-0 flex flex-col items-center'>
        <h2 className='text-center uppercase text-xl font-semibold text-gradient mt-1 mb-2'>
          {card.title}
        </h2>
        <p className='text-center text-sm'>{date}</p>
        <button className='w-40 h-9 absolute -bottom-2 my-4 py-1 px-6 rounded-md font-semibold text-xl text-white uppercase card-btn one'>
          {isLoading ? <Loader /> : `${price} BS`}
        </button>
      </div>
    </div>
  );
};

export default Card;
