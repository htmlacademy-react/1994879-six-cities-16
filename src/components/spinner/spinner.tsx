import { FC } from 'react';
import ReactLoading, { LoadingType } from 'react-loading';

type SpinnerConfigType = {
  type: LoadingType;
  color: string;
}

const spinnerConfig: SpinnerConfigType = {
  type: 'bars',
  color: '#4481c3',
};

type SpinnerProps = {
  isLoading?: boolean;
  message: string;
}

export const Spinner: FC<SpinnerProps> = ({ isLoading = false, message }) => (
  isLoading &&
    <div >
      <ReactLoading {...spinnerConfig} />
      <p>{message}</p>
    </div>
);
