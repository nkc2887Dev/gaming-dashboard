// import { NOTIFICATION_TYPE, iNotification, Store } from 'react-notifications-component';

// interface CustomNotification extends Omit<iNotification, 'message' | 'type'> {
//   isMobile?: boolean;
// }
// const config: CustomNotification = {
//   insert: 'top',
//   container: 'top-right',
//   animationIn: ['animated', 'fadeIn'],
//   animationOut: ['animated', 'fadeOut'],
//   isMobile: true,
//   dismiss: {
//     duration: 3000,
//     showIcon: true,
//     // onScreen: true,
//   },
// };

// const addToast = (type: NOTIFICATION_TYPE, message: string) => {
//   Store.addNotification({
//     message,
//     type,
//     ...config,
//   });
// };

// const Toast = {
//   error: (message: string) => addToast('danger', message),
//   success: (message: string) => addToast('success', message),
//   info: (message: string) => addToast('info', message),
//   default: (message: string) => addToast('default', message),
//   warn: (message: string) => addToast('warning', message),
// };

// export default Toast;
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

const Toast = {
  success: (message: string, config: ToastOptions = {}) => 
    toast.success(message, { ...defaultConfig, ...config }),

  error: (message: string, config: ToastOptions = {}) => 
    toast.error(message, { ...defaultConfig, ...config }),

  info: (message: string, config: ToastOptions = {}) => 
    toast.info(message, { ...defaultConfig, ...config }),

  warn: (message: string, config: ToastOptions = {}) => 
    toast.warn(message, { ...defaultConfig, ...config }),

  default: (message: string, config: ToastOptions = {}) => 
    toast(message, { ...defaultConfig, ...config }),
};

export default Toast;
