import { BrowserRouter } from 'react-router-dom';

// import { Contact, Motion, Portraits, About, Navbar } from './components'
import Contact from './components/Contact';
import Motion from './components/Motion';
import Portraits from './components/Portraits';
import About from './components/About';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />

        </div>
        <div className="App">
          <Contact/>
          <Motion/>
          <Portraits/>
          <About/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
