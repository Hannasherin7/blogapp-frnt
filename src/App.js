import logo from './logo.svg';
import './App.css';
import { Sighnin } from './components/Sighnin';
import { Sighnup } from './components/Sighnup';

function App() {
  return (
    <div className="App">
      <Sighnin></Sighnin>
     <Sighnup></Sighnup>
    </div>
  );
}

export default App;
