import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import { MainPage } from '../../pages/main-page';
import { FavoritesPage } from '../../pages/favorites-page';
import { LoginPage } from '../../pages/login-page';
import { OfferPage } from '../../pages/offer-page';
import { NotFoundPage } from '../../pages/not-found/not-found-page';
import { Layout } from '../layout/layout';
import { PrivateRoute } from '../private-route/private-route';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';

const App = (): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
        </Route>
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute isLoginLocation>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Unknown} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
