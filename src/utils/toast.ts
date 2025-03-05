import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultConfig: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const Toast = {
  success: (message: string | undefined, config: ToastOptions = {}) =>
    toast.success(message, { ...defaultConfig, ...config }),

  error: (message: string | undefined, config: ToastOptions = {}) =>
    toast.error(message, { ...defaultConfig, ...config }),

  info: (message: string | undefined, config: ToastOptions = {}) =>
    toast.info(message, { ...defaultConfig, ...config }),

  warn: (message: string | undefined, config: ToastOptions = {}) =>
    toast.warn(message, { ...defaultConfig, ...config }),

  default: (message: string | undefined, config: ToastOptions = {}) =>
    toast(message, { ...defaultConfig, ...config }),
};

export default Toast;
