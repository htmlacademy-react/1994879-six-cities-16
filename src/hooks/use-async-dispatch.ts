import { AxiosError } from 'axios';
import { AppDispatch, useAppDispatch } from '.';
import { toast } from 'react-toastify';

export const useAsyncDispatch = (): AppDispatch => {
  const dispatch = useAppDispatch();

  const dispatchWithToast: AppDispatch = (action: AppDispatch) =>
    dispatch(action: AnyAction).catch((error: AxiosError) => {
      const errorMessage = error.message ?? 'An unknown error occurred';
      toast.error(errorMessage);
    });

  return dispatchWithToast;
};
