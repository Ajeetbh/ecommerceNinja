import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import image from './images/homewallpaper1.webp';
import aboutimage from './images/about.png'
import About from './components/About';
import aboutimage1 from './images/homewallpaper.webp'
import BuySell from './components/BuySell';
import Careers from './components/Careers';
import People from './components/People';
import Blog from './components/Blog';
import Ventures from './components/Ventures';
import AdvisoryBoard from './components/AdvisoryBoard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home image1={image} aboutimage={aboutimage}/>} />
         <Route path="/about" element={<About aboutimage1={aboutimage1}/>}/>
         <Route path="/buy-sell" element={<BuySell/>}/>
         <Route path="/careers" element={<Careers/>}/>
         <Route path="/people" element={<People/>}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/ventures" element={<Ventures/>}/>
         <Route path="/advisory-board" element={<AdvisoryBoard/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
