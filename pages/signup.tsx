/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import { Alert, AlertTitle, Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Signup.module.css';
import home from '../styles/Home.module.css';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

const Signup: NextPage = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const onChangeFName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFName(e.target.value);
  };

  const onChangeLName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLName(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    setIsSigningUp(true);
    try {
      console.log('Signing up...');
      console.log({
        fName,
        lName,
        email,
        password,
      });
    } catch (err) {
      // setError(err.message);
      console.log(err);
    }
    setIsSigningUp(false);
  };

  return (
    <>
      <Head>
        <title>JumpStarter - Sign up</title>
        <meta name="description" content="Lets JumpStart projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={home.grid}>
        <a href="/" className={home.card}>
          <HomeIcon />
        </a>
      </div>
      <Box className={styles.signup_wrapper}>
        <h1>Create a new account</h1>
        <div>
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={fName}
            onChange={(e) => {
              onChangeFName(e);
            }}
            className={styles.signup_input}
          />
          <input
            type="text"
            name="name"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => {
              onChangeLName(e);
            }}
            className={styles.signup_input}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              onChangeEmail(e);
            }}
            className={styles.signup_input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              onChangePassword(e);
            }}
            className={styles.signup_input}
          />
          {errorMessage !== '' && (
            <Alert severity="error">
              <AlertTitle>{errorMessage}</AlertTitle>
            </Alert>
          )}
          <div className="auth-buttons">
            <button
              disabled={isSigningUp}
              type="submit"
              onClick={handleSignUp}
              className={styles.signup_button}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className={styles.account_exists}>
          Already have an account?
          <a href="/login">Login</a>
        </div>
      </Box>
      <footer className={home.footer}>Built by Team Blend 😎</footer>
    </>
  );
};

export default Signup;
