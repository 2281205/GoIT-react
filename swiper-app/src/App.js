import logo from './logo.svg';
import './App.css';
import SwiperBar from './SwiperBar/SwiperBar';
import CapitalLetterAvatar from './CapitalLetterAvatar/CapitalLetterAvatar'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
<SwiperBar/>
<CapitalLetterAvatar />
    </div>
  );
}

export default App;
