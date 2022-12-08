import './App.css';
import'./components/Navbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoweAre from './components/WhoweAre';
import WhatweDo from './components/WhatweDo';
import ContactForm from './components/ContactForm';
import NimBusAid from './components/NimbusAid';
import PastWork from './components/PastWork';
import Team from './components/Team';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Cookies from './components/Cookies';
import Banner from './components/Banner';
import Brands from './components/Brands';
function App() {
  return (
    <>
    <div className="App">
         <Navbar />
         <Hero />
         <WhoweAre />   
         <WhatweDo />
         <PastWork/> 
         <NimBusAid />
         <Brands />
         <Team />   
         <ContactForm /> 
         <Accordion />
         <Banner />
         <Footer />
         <Cookies />
         
      </div>
    </>
  );
}

export default App;
