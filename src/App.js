import React, { Suspense, useEffect } from 'react';

/***  Components  ***/
import Loader from './components/Loader';

/***  Pages  *****/
// Login Page
const Login = React.lazy(() => import('./pages/Login'));
// DAshboard Page
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

/***  Scss  ***/
import styles from './assets/scss/main.scss';
import Cookies from 'js-cookie';

export default function App() {
  useEffect(() => {
    if(Cookies.get("access_token") && window.location.pathname !== "/dashboard"){
      window.location.replace("/dashboard");
    }else{
      
      !Cookies.get("access_token") && window.location.pathname === "/dashboard" && window.location.replace("/")
    }
  },[]);
  return (
    <Suspense fallback={<Loader classes={styles.loader_fullpage} />}>
      {Cookies.get("access_token") ? <Dashboard /> : <Login />}
    </Suspense>
  );
}
