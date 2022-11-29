import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ChooseBasket from './pages/ChooseBasket';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreateBasket from './pages/CreateBasket';
import UserHomePage from './pages/UserHomePage';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<UserHomePage />} />
        <Route path="/:id/basket/choose" element={<ChooseBasket />} />
        <Route path="/basket/create" element={<CreateBasket />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
