import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Profile from './pages/Profile';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

function App() {


  return (
    <div className='App' >
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/profile'>Profile</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
      <div>Footer</div>
    </div>
  );
}

export default App;
