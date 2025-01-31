import { GET_PRICES_AWS } from '../config/config';
import { usePrices } from '../hooks/usePrices';

const Navbar = () => {
  const { mutate: mutatePrices } = usePrices();

  const handleUpdatePrices = async () => {
    try {
      await mutatePrices(GET_PRICES_AWS, { revalidate: true });
      console.log('Prices updated successfully');
    } catch (error) {
      console.error('Error updating prices:', error);
    }
  };

  return (
    <nav className='w-full fixed left-0 top-0 z-40 md:py-4 bg-gradient  flex justify-end'>
      <div className='hidden md:flex items-center w-max mr-10'>
        <button
          className='card-btn one border border-neutral-200/70 px-6 py-2 rounded-lg font-medium hover:opacity-80 transition-opacity text-neutral-50 select-none'
          onClick={handleUpdatePrices}
        >
          Update Prices
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
