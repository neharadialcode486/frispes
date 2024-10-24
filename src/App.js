import './App.css';
import Brands from './components/home/Brands';
import Center from './components/home/Center';
import Gallery from './components/home/Gallery';
import Hero from './components/home/Hero';
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
    </>
  );
}

export default App;
