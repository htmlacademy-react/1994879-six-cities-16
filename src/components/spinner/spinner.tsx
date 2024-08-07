import { FC, memo } from 'react';
import ReactLoading, { LoadingType } from 'react-loading';
import './spinner.css';

const DEFAULT_MESSAGE = 'Loading...';

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

const SpinnerComponent: FC<SpinnerProps> = ({ message = DEFAULT_MESSAGE }) => (
  <div className="spinner-container">
    <ReactLoading {...spinnerConfig} className="spinner-loading" />
    <p>{message}</p>
  </div>
);

export const Spinner = memo(SpinnerComponent);
