import { LoadingType } from 'react-loading';

export const DEFAULT_MESSAGE = 'Loading...';

type SpinnerConfigType = {
  type: LoadingType;
  color: string;
}

export const spinnerConfig: SpinnerConfigType = {
  type: 'bars',
  color: '#4481c3',
};
