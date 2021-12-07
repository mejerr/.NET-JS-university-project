import { Suspense } from 'react';
import './App.css';
import routes from './router';

const app = () => {
  return (
    <div className="app">
      <Suspense fallback={<p>...Loading</p>}>{routes}</Suspense>
    </div>
  );
}

export default app;
