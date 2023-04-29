import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ListCards from './components/ListCards';
import { SWRConfig } from 'swr';

const localStorageProvider = () => {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(
    JSON.parse(localStorage.getItem('tudolarvenezuela-cache') || '[]')
  );
  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('tudolarvenezuela-cache', appCache);
  });

  return map;
};

const swrConfig: any = { provider: localStorageProvider };

// console.log(import.meta.url);

function App() {
  return (
    <div className='relative border min-h-screen'>
      <Navbar />
      <SWRConfig value={swrConfig}>
        <ListCards />
      </SWRConfig>
      <Footer />
    </div>
  );
}

export default App;
