import './App.css';
import 'animate.css'
import Brand from './components/Brand';
import Header from './components/Header';
import Meet from './components/Meet';
import Excellent from './components/Excellent';
import Make from './components/Make';
import Story from './components/Story';
import News from './components/News';
import Collection from './components/Collection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Brand />
      <Excellent />
      <Make />
      <Meet/>
      <Story />
      <News />
      <Collection />
      <Footer />
    </>
  );
}

export default App;
