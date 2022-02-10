import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from './actions/users';
import Header from './components/Header';
import './css/App.css';
import routes from './router';

const App = () => {
const isAuthenticated = useSelector(state => state.users.isAuthenticated);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(setAuthUser());
}, [dispatch]);

  return (
    <div className="app" >
      <Header/>
      <div className="container">
        <Suspense fallback={<p>...Loading</p>}>{routes(isAuthenticated)}</Suspense>
      </div>
    </div>
  );
}

export default App;
