import { FC } from 'react';
import ReactLoading, { LoadingType } from 'react-loading';
import './spinner.css';

type SpinnerConfigType = {
  type: LoadingType;
  color: string;
}

const spinnerConfig: SpinnerConfigType = {
  type: 'bars',
  color: '#4481c3',
};

type SpinnerProps = {
  message?: string;
}

export const Spinner: FC<SpinnerProps> = ({ message = 'Loading...' }) => (
  <div className="spinner-container">
    <ReactLoading {...spinnerConfig} className="spinner-loading" />
    <p>{message}</p>
  </div>
);
