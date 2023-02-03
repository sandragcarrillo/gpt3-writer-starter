import './styles.css';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default App;
