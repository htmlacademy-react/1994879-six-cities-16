import { FC, useRef } from 'react';
import { CityLink } from '../components/city-link';
import { getRandomCity } from '../utils';
import { useAppDispatch } from '../hooks';
import { login } from '../store/user-slice/thunk';
import { LoginEntity } from '../types/user';

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const randomCity = getRandomCity();

  const handleSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const email = emailRef.current?.value.trim() || '';
    const password = passwordRef.current?.value.trim() || '';
    dispatch(login({ email, password } as LoginEntity));
  };

  return (
    <div className="page page--gray page--login">
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
                  ref={emailRef}
                  pattern="[a-z0-9._%+\-]+@[a-z0-9\-\.]+\.[a-z]{2,}$"
                  title='example: Oliver.conner@gmail.com'
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
                  ref={passwordRef}
                  pattern="^(?=.*[a-zA-Z])(?=.*\d).*$"
                  title="Password must contain at least one letter and one number"
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
      </main>
    </div>);
};
