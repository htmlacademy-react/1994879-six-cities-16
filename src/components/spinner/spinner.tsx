import { FC, memo } from 'react';
import { DEFAULT_MESSAGE, spinnerConfig } from './const';
import ReactLoading from 'react-loading';
import './spinner.css';

type SpinnerProps = {
  message?: string;
}

const SpinnerComponent: FC<SpinnerProps> = ({ message = DEFAULT_MESSAGE }) => (
  <div className="spinner-container">
    <ReactLoading
      type={spinnerConfig.type}
      color={spinnerConfig.color}
      className="spinner-loading"
    />
    <p>{message}</p>
  </div>
);

export const Spinner = memo(SpinnerComponent);
