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
import About from './Components/About/About';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import TextEditor from './Components/posts/CreatePost/CreatePost';
import Blog from './Components/posts/ViewPost/Blog';
import BlogDetail from './Components/posts/ViewPost/BlogDetails/BlogDetail';



   

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
    <Route path="about" element={<About/>} />
    <Route path="upload" element={<Upload/>} />
    <Route path="order/:email" element={<WhiteList />} />
    <Route path="blogs/:id" element={<BlogDetail />} />
    <Route path="createpost" element={<TextEditor/>} />
    <Route path="blogs" element={<Blog/>} />
    <Route path="places" element={<Places />} />

    <Route
            path='places/:placeid'
            element={
              <PrivateRoute>
                {' '}
                <Details />
              </PrivateRoute>
            }
          ></Route>
    {/* <Route path="places/:placeid" element={<Details />} /> */}
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
