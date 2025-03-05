import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Please insert Username!"),
  password: yup.string().required("Please insert Password!"),
  captchaAnswer: yup.string().required("Solve CAPTCHA to move ahead"),
});
