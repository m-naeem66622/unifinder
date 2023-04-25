import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './custom-styles.css'
import Header from './components/Header';
import Showcase from './components/Showcase';
import About from './components/About';
import Individual from './components/Individual';
import ListProvider from './providers/ListProvider';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ListProvider>
        <Router basename={process.env.PUBLIC_URL}>
        <div className='d-flex h-100 text-white bg-dark'>
          <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Header />
            <Routes>
              <Route path='/' element={<Showcase />} />
              <Route path='/about' element={<About />} />
              <Route path='/university/:index/:university' element={<Individual/>} />
              </Routes>
              <Footer />
          </div>
        </div>
        </Router>
      </ListProvider>
    </>
  );
}

export default App;
