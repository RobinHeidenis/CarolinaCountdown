import type {Component} from 'solid-js';
import styles from './App.module.css';
import {DaysCounter} from './counters/DaysCounter';
import {HoursCounter} from './counters/HoursCounter';
import {MinutesCounter} from './counters/MinutesCounter';
import {SecondsCounter} from './counters/SecondsCounter';
import {MillisecondsCounter} from './counters/MillisecondsCounter';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div>
          <h1>Days until Carolina comes over</h1>
          <DaysCounter />
          <h2>That's this many hours:</h2>
          <HoursCounter />
          <h2>That's this many minutes:</h2>
          <MinutesCounter />
          <h2>That's this many seconds:</h2>
          <SecondsCounter />
          <h2>That's this many milliseconds:</h2>
          <MillisecondsCounter />
        </div>
      </header>
    </div>
  );
};

export default App;
