import { toast } from 'react-toastify';

import { TErrorMessage, TOptionsMessages } from '@/types/toastify.types';

const oOptionsMessages: TOptionsMessages = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const emitSuccessMessages = (sSuccessText: string): void => {
  toast.success(sSuccessText, oOptionsMessages);
};

export const emitErrorMessages = (param: string | [] | TErrorMessage): void => {
  if (Array.isArray(param)) {
    param.forEach((sErr: string) => {
      toast.error(sErr, oOptionsMessages);
    });
  } else if (typeof param !== 'string') {
    toast.error(param.message, oOptionsMessages);
  } else {
    toast.error(param, oOptionsMessages);
  }
};
