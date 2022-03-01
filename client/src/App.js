import './App.css';
import Navbar from  './Components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from  './Components/Home';
import About from  './Components/About';
import Contact from  './Components/Contact';
import Login from  './Components/Login';
import SignUp from  './Components/SignUp';
import ErrorPage from './Components/ErrorPage';
function App() {
  return (
    <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='*' element={<ErrorPage / >}></Route>
          </Routes>
    </>
  );
}

export default App;
