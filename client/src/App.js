import { io } from 'socket.io-client';
import { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

const socket = io('http://localhost:5000/pong');
// socket.on('connect', () => console.log(socket.id));

function App() {
  useEffect(() => {
    socket.on('server ready', (data) => {
      console.log(data, '-', socket.id);
    });

    socket.emit('ready', 'client le emit gareko data');
  }, []);

  // working with pong game
  // 1. wait for clients to be ready
  // 2. sync your clients UI (paddle and ball)
  // 3. sync your clients score

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
