import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import { MainPage } from '../../pages/main-page';
import { FavoritesPage } from '../../pages/favorites-page';
import { LoginPage } from '../../pages/login-page';
import { OfferPage } from '../../pages/offer-page';
import { NotFoundPage } from '../../pages/not-found/not-found-page';
import { Layout } from '../layout';
import { PrivateRoute } from '../private-route';
import { ScrollToTop } from '../scroll-to-top';
import { useEffect } from 'react';
import { fetchFavorites } from '../../store/favorite-slice/thunk';
import { useAppDispatch } from '../../hooks';
import { useAuth } from '../../hooks/use-auth';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isAuthorized } = useAuth();

  useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, isAuthorized]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />} >
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute isLoginLocation>
                  <LoginPage />
                </PrivateRoute>
              }
            />
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
          <Route path={AppRoute.Unknown} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
