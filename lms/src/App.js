import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import BrandSection from './components/BrandSection';
import AboutArea from './components/AboutArea';
import CounterArea from './components/CounterArea';
import PopulerArea from './components/PopularArea';
import GridSection from './components/GridSection';
import RegisterSection from './components/RegisterSection';
import PricingArea from './components/PricingArea';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Topbar /> 
        <Navbar />
        <HeroBanner />
        <BrandSection/>
        <AboutArea/>
        <CounterArea/>
        <PopulerArea/>
        <GridSection/>
        <RegisterSection/>
        <PricingArea/>
        <AboutSection/>
        <BlogSection/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
