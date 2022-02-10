/* eslint-disable @next/next/no-html-link-for-pages */

import { useState } from 'react';
import { Alert, AlertTitle, Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Login.module.css';
import home from '../styles/Home.module.css';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      console.log('Logging in...');
      console.log({
        email,
        password,
      });
    } catch (err) {
      // setError(err.message);
      console.log(err);
    }
    setIsLoggingIn(false);
  };

  return (
    <>
      <Head>
        <title>JumpStarter - Login</title>
        <meta name="description" content="Lets JumpStart projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={home.grid}>
        <a href="/" className={home.card}>
          <HomeIcon />
        </a>
      </div>
      <Box className={styles.login_wrapper}>
        <h1>Login</h1>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              onChangeEmail(e);
            }}
            className={styles.login_input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              onChangePassword(e);
            }}
            className={styles.login_input}
          />
          {errorMessage !== '' && (
            <Alert severity="error">
              <AlertTitle>{errorMessage}</AlertTitle>
            </Alert>
          )}
          <div className="auth-buttons">
            <button
              disabled={isLoggingIn}
              type="submit"
              onClick={handleLogin}
              className={styles.login_button}
            >
              Login
            </button>
          </div>
        </div>
        <div className={styles.account_not_exists}>
          Don&apos;t have an account?
          <a href="/signup">Signup</a>
        </div>
      </Box>
      <footer className={home.footer}>Built by Team Blend 😎</footer>
    </>
  );
};

export default Login;
