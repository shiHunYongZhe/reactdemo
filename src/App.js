import logo from './logo.svg';
import GlobalStyle from './style.js';
import IconfontStyle from './statics/iconfont/iconfont';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <IconfontStyle/>
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
