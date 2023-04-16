import { toast } from 'react-toastify';

export const emitSuccessMessages = (sSuccessText: string): void => {
  toast.success(sSuccessText, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const emitErrorMessages = (param: string | []): void => {
  if (typeof param === 'string') {
    toast.error(param, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }

  if (Array.isArray(param)) {
    param.forEach((sErr: string) => {
      toast.error(sErr, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    });
  }
};
