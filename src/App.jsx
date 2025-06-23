import { Routes, Route } from 'react-router-dom';

import { SettingsProvider } from './contexts/SettingsContext';
import PreferencesPanel from './components/PreferencesPanel';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <SettingsProvider>

      <Header />

      <main className="main-content">
        <PreferencesPanel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<CountryPage />} />
        </Routes>
      </main>

      {/* <Footer /> */}

    </SettingsProvider>
  );
}

export default App;