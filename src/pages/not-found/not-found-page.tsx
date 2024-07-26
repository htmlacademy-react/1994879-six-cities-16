import { Link } from 'react-router-dom';
import './not-found-page.css';
import { AppRoute } from '../../const';

const NotFoundPage = (): JSX.Element => (
  <div className="not-found-page">
    <h1>404 Not Found</h1>
    <p>Go back to <Link to={AppRoute.Main}>home page</Link>.</p>
  </div>
);

export default NotFoundPage;
