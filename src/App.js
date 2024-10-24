import PreLoader from './components/common/PreLoader';
import ScrollToTop from './components/common/ScrollToTop';
import Brands from './components/home/Brands';
import Events from './components/home/Events';
import Facilities from './components/home/Facilities';
import Footer from './components/home/Footer';
import Gallery from './components/home/Gallery';
import HelpCenter from './components/home/HelpCenter';
import Hero from './components/home/Hero';
import Member from './components/home/Member';
import Reviews from './components/home/Reviews';
import Space from './components/home/Space';
import Workspace from './components/home/Workspace';
import './App.css';

function App() {
  return (
    <>
      <Hero />
      <Space />
      <Workspace />
      <Facilities />
      <Gallery />
      <Brands />
      <Reviews />
      <HelpCenter />
      <Events />
      <Member />
      <Footer />
      <ScrollToTop />
      <PreLoader />
    </>
  );
}

export default App;