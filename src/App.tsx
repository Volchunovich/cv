import React, { FC } from "react";

import styles from "./App.module.css";

export const App: FC = () => {
  return (
    <div className={styles.Container}>
      <h1>Artem Volchunovich</h1>
      <h2>
        Web3 Senior Frontend Engineer –{" "}
        <a target="_blank" href="https://p2p.org">
          P2P.org
        </a>
      </h2>
      <p>
        I'm a Web3 Senior Frontend Engineer with a passion for building
        decentralized applications and blockchain-based solutions. I have
        experience in developing complex web applications using React,
        TypeScript, Wagmi, Viem. I have a strong understanding of the Ethereum
        blockchain and the Web3 ecosystem. I'm a strong advocate for Web3
        technologies and decentralized finance.
      </p>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/Volchunovich">
            GitHub
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/artem-volchunovich-96534b233/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};
