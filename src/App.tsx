import ListCards from './components/ListCards';
import { SWRConfig, SWRConfiguration } from 'swr';
import Layout from './container/Layout';
import { localStorageProvider } from './services/localStorageProvider';

const swrConfig = { provider: localStorageProvider } as SWRConfiguration;

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
