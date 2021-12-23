import React, { Suspense, useEffect } from 'react';

/***  Components  ***/
import Loader from './components/Loader';

// property page
const Property = React.lazy(() => import('./pages/property'));

/***  Scss  ***/
import styles from './assets/scss/main.scss';

export default function App() {
  useEffect(() => {
    
  }, []);
  return (
    <Suspense fallback={<Loader classes={styles.loader_fullpage} />}>
      <Property />
    </Suspense>
  );
}
