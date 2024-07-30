import { Link } from 'react-router-dom';
import './not-found-page.css';
import { AppRoute } from '../../const';
import { FC } from 'react';

export const NotFoundPage: FC = () => (
  <div className="not-found-page">
    <h1>404 Not Found</h1>
    <p>Go back to <Link to={AppRoute.Main}>home page</Link>.</p>
  </div>
);
