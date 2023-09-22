import { BrowserRouter } from 'react-router-dom';

import Contact from './components/Contact';
import Motion from './components/Motion';
import Portraits from './components/Portraits';
import About from './components/About';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="App">
        <Contact/>
        <Motion/>
        <Portraits/>
        <About/>
      </div>
    </BrowserRouter>
  )
}

export default App;
