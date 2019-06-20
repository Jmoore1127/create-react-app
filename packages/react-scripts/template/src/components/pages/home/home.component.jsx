import React from 'react';
import { ReactComponent as Logo} from '../../../assets/svgs/logo.svg';
import styles from './home.component.module.css';

export const Home = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <Logo className={styles.appLogo} alt="logo" />
      <p>
        Edit <code>src/components/home/home.component.jsx</code> and save to reload.
      </p>
      <a
        className={styles.appLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        You're Running React!
      </a>
    </header>
  </div>
);