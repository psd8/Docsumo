import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './Login.scss';
import Logo from '../../assets/images/logo.js';
import TextField from '../../components/TextField';
import { ErrorMessages } from '../../utils/constants';
import Button from '../../components/Button';
import { post } from '../../api';
import { API_ROUTES } from '../../api/routes';
import Loader from '../../components/Loader';
import Cookies from 'js-cookie';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(ErrorMessages.VALID_EMAIL)
    .required(ErrorMessages.EMAIL_REQUIRED),
  password: yup.string().required(ErrorMessages.PASSWORD_REQUIRED),
});

function Login() {
  const [apiError, setApiError] = useState();
  const [isLogginIn, setIsLogginIn] = useState(false);
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
      setIsLogginIn(true);
      try{
        let res = await post(API_ROUTES.LOGIN, values);
        Cookies.set("name", res.data.user.full_name);
        setIsLogginIn(false);
        window.location.replace("/dashboard");
      }catch(err){
          setIsLogginIn(false);
          setApiError(err.message);
          
      };
    },
  });

  //Reset api error state if exists on form values change
  useEffect(() => {
    apiError && setApiError("");
  },[formik.values]);

  /* Handle Login Button Click */
  const handleLoginBtnClick = () => {
    formik.submitForm();
  };

  /* Return Html For Login Page */
  return (
    <section className={styles.login_page}>
      <div className="container h-100">
        <div className="row justify-content-center h-100">
          <div className="col-lg-4 col m-auto">
            <div className={`${styles.login_wrapper}`}>
              <div className={`position-relative ${styles.login_card}`}>
                <div className={`${styles.login_header}`}>
                  <div className={`${styles.login_image_Wrapper}`}>
                    <Logo />
                  </div>
                  <h1 className={styles.login_title}>Login to Docsuo</h1>
                </div>
                <div className={styles.login_form}>
                  <TextField
                    label="Work Mail"
                    inputProps={{
                      type: 'email',
                      name: 'email',
                      value: formik.values.email,
                    }}
                    formik={formik}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <TextField
                    label="Password"
                    inputProps={{
                      type: 'password',
                      name: 'password',
                      value: formik.values.password,
                    }}
                    formik={formik}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div>
                    <p className={styles.login_error_block}>{apiError}</p>
                    <Button
                      text={
                        isLogginIn ? (
                          <div className="d-flex align-items-center">
                            <Loader classes={styles.login_button_loader} />{' '}
                            <span>Loging In</span>
                          </div>
                        ) : (
                          'login'
                        )
                      }
                      onClick={handleLoginBtnClick}
                      disabled={isLogginIn}
                    />
                  </div>
                </div>
                <div
                  className={`d-flex align-items-center justify-content-between ${styles.singup}`}
                >
                  <p className={`mb-0 ${styles.text}`}>
                    Don't have an account?
                  </p>
                  <a href="https://app.docsumo.com/signup/" className="text-decoration-none">
                    <Button text="Sign up" isOutlined />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
