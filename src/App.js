import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Objective from './components/Objective';
import Events from './components/Events';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Register from './components/Register';
import NewEvents from './components/NewEvents';
import BackBtn from './components/BackBtn';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>  
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route exact path='/' element={
          <>
            <Home />
            <Objective />
            <Events />
          </>
        }/>
        <Route exact path='/register' element={
          <>
            <BackBtn />
            <NewEvents display='none' margin='100px'/>
            <Register />
          </>
        }/>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
