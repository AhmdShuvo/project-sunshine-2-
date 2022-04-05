import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Contexts/AuthProvider';


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Header></Header> 
    <Routes>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="signUp" element={<SignUp />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
