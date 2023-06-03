import './App.css';
import EventsPage from './Components/Pages/EventsPage';
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer';
import WOW from 'wowjs';
import { useEffect } from 'react';
import HomePage from './Components/Pages/HomePage';
import { Routes, Route} from 'react-router-dom'
import PricingPage from './Components/Pages/PricingPage';
import ContactPage from './Components/Pages/ContactPage';
import PrivacyPage from './Components/Pages/PrivacyPage';

function App() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <>
          <Nav/>
          <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/Events' Component={EventsPage}/>
            <Route path='/Pricing' Component={PricingPage}/>
            <Route path='/Contact' Component={ContactPage}/>
            <Route path='/Policy' Component={PrivacyPage}/>
          </Routes>
          <Footer/>
    </>
  );
}

export default App;
