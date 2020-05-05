import React from 'react';
import { ReactComponent as Logo} from '../../../assets/svgs/logo.svg';
import * as styles  from './home.component.styles';

export const Home = () => (
  <div css={styles.app}>
    <header css={styles.header}>
      <Logo css={styles.logo} alt="logo" />
      <p>
        Edit <code>src/components/home/home.component.jsx</code> and save to reload.
      </p>
      <a
        css={styles.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        You're Running React!
      </a>
    </header>
  </div>
);