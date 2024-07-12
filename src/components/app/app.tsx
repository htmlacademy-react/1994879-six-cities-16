import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import Main from '../../pages/main';
import Favorites from '../../pages/favorites';
import Login from '../../pages/login';
import OfferPage from '../../pages/offer-page';
import NotFound from '../../pages/not-found';
import Layout from '../layout/layout';

const App = () : JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />} >
          <Route index element={<Main />} />
          {CITIES.map((city) => <Route key={city} path={city} element={<Main />} />)}
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Favorites} element={<Favorites />} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
        </Route>
        <Route path={AppRoute.All} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
