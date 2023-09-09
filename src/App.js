import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Objective from './components/Objective';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <>  
      <Navbar/>
      <Home />
      <Objective />
      <Events />
      <Footer />
    </>
  );
}

export default App;
