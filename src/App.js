import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import ImageInput from './components/ImageInput';

function App() {
  return (
    <div className="App">
            <Navbar/>

             <Routes>
              <Route path='/login'  element={<Login/>}></Route>
              <Route path='/signUp' element={<SignUp/>}></Route>
              <Route path='/imageInput' element={<ImageInput/>}></Route>
               <Route path='/' element={<Home/>}></Route>
             </Routes>
    </div>
  );
}

export default App;
