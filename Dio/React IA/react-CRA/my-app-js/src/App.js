import logo from './logo.svg';
import './App.css';

function App() {
  console.log('Organization Name:', process.env.REACT_APP_ORGANIZATION_NAME);
  console.log('Enable Log:', Number(process.env.REACT_APP_ENABLE_LOG));
  console.log('Date Release:', new Date(process.env.REACT_APP_DATE_REALEASE));
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
