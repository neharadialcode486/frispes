import './App.css';
import Brands from './components/home/Brands';
import Center from './components/home/Center';
import Events from './components/home/Events';
import Footer from './components/home/Footer';
import Gallery from './components/home/Gallery';
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
      <Center />
      <Events />
      <Member />
      <Footer />
    </>
  );
}

export default App;
