import {Navigate,Route, Routes} from 'react-router-dom';
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from './pages/signup/SignUp';
import Home from "./pages/home/Home";
import ClickedHome from "./pages/home/ClickedHome";
import ClickedSide from "./pages/home/ClickedSide";
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import Sidebar from './components/sidebar/Sidebar';
import Media from 'react-media';

function App() {
  const {authUser}=useAuthContext();
  
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
           <Route path='/' element={authUser ? <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
              <ClickedHome/>
            ) : (
              <Home/>
            )
          }
        </Media>:<Navigate to={"/login"}/>}/>
           <Route path='/login' element={authUser ? <Navigate to='/'/> : <Login/>}/>
           <Route path='/signup' element={authUser ? <Navigate to='/'/> : <SignUp/>}/>
      </Routes>
      <Toaster/>
      
    </div>
  );
}

export default App;
