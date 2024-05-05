const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 z-40 py-3 bg-white shadow-md w-screen card-btn one'>
      <nav className='max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-center'>
        <a href='./' className='flex items-center'>
          <h3 className='text-size-2 font-bold text-white-custom tracking-wider uppercase'>
            TuDolarVenezuela
          </h3>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
