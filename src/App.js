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

import Places from './Components/Places/Places';
import Details from './Components/Details/Details';
import ManageDelete from './Components/ManageDelete/ManageDelete';
import WhiteList from './Components/MyWhiteList/WhiteList';
import Upload from './Components/Upload/Upload';

   

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Header></Header> 
    <Routes>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="signUp" element={<SignUp />} />
    <Route path="delete" element={<ManageDelete />} />
    <Route path="upload" element={<Upload/>} />
    <Route path="order/:email" element={<WhiteList />} />
  
    <Route path="places" element={<Places />} />
    <Route path="places/:placeid" element={<Details />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
