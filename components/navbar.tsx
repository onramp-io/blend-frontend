/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from 'next';
import home from '../styles/Home.module.css';
import HomeIcon from '@mui/icons-material/Home';

const Navbar: NextPage = () => {
  return (
    <div className={home.grid}>
      <a href="/" className={home.card}>
        <HomeIcon />
      </a>

      <a href="/create" className={home.card}>
        <h2>Create a new project</h2>
      </a>

      <a href="/discover" className={home.card}>
        <h2>Discover</h2>
      </a>

      <a href="/login" className={home.card}>
        <h2>Login</h2>
      </a>

      <a href="/signup" className={home.card}>
        <h2>Signup</h2>
      </a>
    </div>
  );
};

export default Navbar;
