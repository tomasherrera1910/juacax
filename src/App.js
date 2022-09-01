import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { BingoCard } from './components/BingoCard';
import {Form} from './components/Form'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/card' element={<BingoCard/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
