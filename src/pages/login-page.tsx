import { FC } from 'react';
import { Cities } from '../const';
import { CityLink } from '../components/city-link';
import { getRandomInt } from '../utils';
import { CityName } from '../types/city';
import { getActiveCity, selectCity } from '../store/app-slice';
import { useAppDispatch, useAppSelector } from '../hooks';

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const cities = Object.keys(Cities) as CityName[];
  dispatch(selectCity(cities[getRandomInt(0, cities.length - 1)]));

  const { name: randomCity } = useAppSelector(getActiveCity);

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <CityLink city={randomCity} />
            </div>
          </section>
        </div>
      </main>
    </div>);
};

export default Login;
