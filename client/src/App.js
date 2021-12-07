import { Suspense } from 'react';
import Header from './components/Header';
import './css/App.css';
import routes from './router';

const app = () => {
  return (
    <div className="app" >
      <Header/>
      <div className="container">
        <Suspense fallback={<p>...Loading</p>}>{routes}</Suspense>
      </div>
    </div>
  );
}

export default app;
