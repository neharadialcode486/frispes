import './App.css';
import Brands from './components/home/Brands';
import Gallery from './components/home/Gallery';
import Hero from './components/home/Hero';
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
    </>
  );
}

export default App;
