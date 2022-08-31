import { HelloWorld } from './pages/HelloWorld';
import reactLogo from './assets/react.svg';
import Interfaces from './pages/Interfaces';
import './App.css';


/**
 ** TypeScript Practice - Main HTML structure
 * @return { string } The HTML App
 */
function App(): JSX.Element {
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>TypeScript Practice</h1>
      <div className='card'>
        {/* {<HelloWorld printLog={true} />} */}
        <hr />
        {<Interfaces /> }
      </div>
    </div>
  );
}

export default App;
