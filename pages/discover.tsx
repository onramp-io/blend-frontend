/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import { Alert, AlertTitle, Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Signup.module.css';
import home from '../styles/Home.module.css';
import HomeIcon from '@mui/icons-material/Home';

const Discover: NextPage = () => {
  return (
    <>
      <Head>
        <title>JumpStarter - Discover</title>
        <meta name="description" content="Lets JumpStart projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={home.grid}>
        <a href="/" className={home.card}>
          <HomeIcon />
        </a>
      </div>
      <Box className={styles.signup_wrapper}>
        <h1>Discover</h1>
      </Box>
      <footer className={home.footer}>Built by Team Blend 😎</footer>
    </>
  );
};

export default Discover;
