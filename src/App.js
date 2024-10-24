import './App.css';
import Brands from './components/home/Brands';
import Events from './components/home/Events';
import Footer from './components/home/Footer';
import Gallery from './components/home/Gallery';
import HelpCenter from './components/home/HelpCenter';
import Hero from './components/home/Hero';
import Member from './components/home/Member';
import Reviews from './components/home/Reviews';
import Space from './components/home/Space';
import Workspace from './components/home/Workspace';

function App() {
  return (
    <>
      <Hero />
      <Space />
      <Workspace />
      <Gallery />
      <Brands />
      <Reviews />
      <HelpCenter />
      <Events />
      <Member />
      <Footer />
    </>
  );
}

export default App;
