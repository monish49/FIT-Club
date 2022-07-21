import './App.css';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons'
import Plans from './Components/Plans/Plans'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
