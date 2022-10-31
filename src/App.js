import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
      {/* links allows the correct component to be loaded when the link is clicked rather that refreshing the page if we were to use an <a></a> tag   */}
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/about-me' className='nav-item '>About Me</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
