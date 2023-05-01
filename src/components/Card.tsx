import { CardInterface } from '../interfaces/card.interface';
import Loader from './Loader';

const Card = ({ card }: { card: CardInterface }) => {
  // Destructuring Card Data
  const { title, image, price, fecha } = card;

  return (
    <div className='relative w-56 h-[370px] rounded-2xl border-4 border-white-custom overflow-hidden bg-white-custom cursor-pointer transition-all ease-in-out card-wrap hover:scale-110'>
      <div className='w-full h-48 grid place-items-center card-header one'>
        <img
          className='aspect-square'
          width={120}
          height={120}
          src={image}
          alt={title}
        />
      </div>
      <div className='w-3/5 mx-auto my-0 flex flex-col items-center'>
        <h2 className='text-center uppercase text-xl font-semibold text-gradient mt-1 mb-2'>
          {title}
        </h2>
        <p className='text-center text-sm'>{fecha}</p>
        <button className='w-40 h-9 absolute -bottom-2 my-4 py-1 px-6 rounded-md font-semibold text-xl text-white uppercase card-btn one'>
          {price === 'isLoading' ? <Loader /> : `${price} BS`}
        </button>
      </div>
    </div>
  );
};

export default Card;
