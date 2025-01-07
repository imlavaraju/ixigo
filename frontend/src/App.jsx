import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LikedArticles from './components/LikedArticles';

const App = () => {
    return (
      <div className='sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer position="top-right" autoClose={3000} />
        <Router>
            <Navbar />
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/likes" element={<LikedArticles />} />
                </Routes>
            </div>
        </Router>
        </div>
    );
};

export default App;

