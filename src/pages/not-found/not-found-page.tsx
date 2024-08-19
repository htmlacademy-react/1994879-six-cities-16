import { Link } from 'react-router-dom';
import './not-found-page.css';
import { AppRoute } from '../../const';
import { FC, memo } from 'react';

const MemoizedLink = memo(Link);

export const NotFoundPage: FC = () => (
  <div className="not-found-page">
    <h1>404 Not Found</h1>
    <p>Go back to <MemoizedLink to={AppRoute.Main}>home page</MemoizedLink>.</p>
  </div>
);
