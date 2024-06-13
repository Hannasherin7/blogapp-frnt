import logo from './logo.svg';
import './App.css';
import { Sighnin } from './components/Sighnin';
import { Sighnup } from './components/Sighnup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={(<Sighnin/>)}/>
      <Route path='/sighn'element={(<Sighnup/>)}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
