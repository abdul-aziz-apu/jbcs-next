import logo from './logo.svg';
import './App.css';
import HelloNpm from './HelloNpm/HelloNpm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <body>
        <HelloNpm />
      </body>
    </div>
  );
}

export default App;
