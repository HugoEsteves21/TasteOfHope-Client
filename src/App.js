import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ChooseBasket from './pages/ChooseBasket';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreateBasket from './pages/CreateBasket';
import AddBasket from './pages/AddBasket';
import UserHomePage from './pages/UserHomePage';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/home" element={<UserHomePage />} />
        <Route path="/:id/basket/choose" element={<ChooseBasket />} />
        <Route path="/basket/create" element={<CreateBasket />} />
        <Route path="/basket/add" element={<AddBasket />} />
        <Route path="/profile/:id/edit" element={<EditProfile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
