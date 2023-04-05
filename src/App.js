
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
function App() {
  return (
    <div className="app">
     <Header />

     <div className='main'>
      <Home />
<About />
      <Skills />
      <Services />
      <Qualification />
      <Contact />
     </div>
    </div>
  );
}

export default App;
