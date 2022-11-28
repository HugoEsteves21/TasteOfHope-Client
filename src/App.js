import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import ChooseBasket from "./pages/ChooseBasket";
import SignupPage from  "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return <div className="App">
    <NavBar />

    <Routes>

      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/basket/choose' element={<ChooseBasket />} />

    </Routes>

    <Footer />
  </div>;
}

export default App;
