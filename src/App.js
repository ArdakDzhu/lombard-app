import './App.css';
import MainPage from './components/MainPage/MainPage';
import Contacts from './components/Contacts/Contacts';
import Faq from './components/FAQ/Faq';
import About from './components/About/About';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">

      <Header/>
    
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
