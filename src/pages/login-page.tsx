import { FC, useEffect, useState } from 'react';
import { CityLink } from '../components/city-link';
import { getRandomCity } from '../utils';
import { useAppDispatch } from '../hooks';
import { login } from '../store/user-slice/thunk';
import { LoginEntity } from '../types/user';
import { CityName } from '../types/city';

const emptyLoginEntity: LoginEntity = { email: '', password: '' };

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const [ loginEntity, setLoginEntity ] = useState<LoginEntity>(emptyLoginEntity);
  const [ randomCity ] = useState<CityName>(getRandomCity());

  useEffect(() => () => setLoginEntity(emptyLoginEntity), []);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = evt.target;
    setLoginEntity({...loginEntity, [name]: value});
  };

  const handleSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login(loginEntity));
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmitForm}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                value={loginEntity.email}
                title='example: Oliver.conner@gmail.com'
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                value={loginEntity.password}
                pattern="^(?=.*[a-zA-Z])(?=.*\d).*$"
                title="Password must contain at least one letter and one number"
                onChange={handleInputChange}
                required
              />
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
    </main>);
};
