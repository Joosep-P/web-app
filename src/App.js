
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotification from './components/NewsNotification';
import SideSection from './components/SideSection';
import Imgs from './components/Imgs';
function App() {
  return (
    <div className="App">
      <Header />
      <NewsNotification  topic='HS-ANALYYSI' body='Milloin autobaan Suomeen?' />
      <NewsNotification  topic='TIEDOTE' body='Hallitus ottaa taas lisää lainaa' />
      <NewsNotification  topic='KOLUMNI' body='Pitäisikö lihansyönti lopettaa?' />
      <MainSection />
      <SideSection />
      <Imgs />
    </div>
  );
}

export default App;