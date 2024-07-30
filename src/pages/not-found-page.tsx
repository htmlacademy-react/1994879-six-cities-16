import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='page'>
      <h1 className='reviews__title'>404 Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <p>
        Go back to <a className='reviews__title' onClick={() => navigate(-1)}>previous page</a> or
        <Link className='reviews__title' to="/">home page</Link>.
      </p>
    </div>);
};
