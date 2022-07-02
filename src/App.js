import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Accueil from './pages/Accueil';
import Home from './pages/Home';
import Contact from './pages/Contact';
import User from './pages/User';


function App() {
  
  return (
      <>

        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Accueil />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </>

  );
}

export default App;
