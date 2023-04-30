import Loader from './Loader';

const Footer = () => {
  return (
    <footer className='w-screen absolute left-0 bottom-0 card-btn one py-4 text-center'>
      <p className='text-md font-semibold text-white-custom'>
        Creado Por Jonathan Peña
        <span className='inline-block text-sm ml-1 animate-heart-pulse'>
          ❤️
        </span>
      </p>
    </footer>
  );
};

export default Footer;
