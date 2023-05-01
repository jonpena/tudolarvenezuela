import ListCards from './components/ListCards';
import { SWRConfig } from 'swr';
import Layout from './container/Layout';

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

function App() {
  return (
    <Layout>
      <SWRConfig value={swrConfig}>
        <ListCards />
      </SWRConfig>
    </Layout>
  );
}

export default App;
