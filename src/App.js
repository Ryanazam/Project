import './App.css';
import HomePage from "../src/Page/HomePage"
import LoginPage from './Page/LoginPage';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div >
    <Navbar/>
      
      <Routes >

        <Route path="/" element={ <HomePage></HomePage>} />
        <Route path="/login" element={ <LoginPage></LoginPage>} />
        
      </Routes>

     
     

    
    </div>
  );
}

export default App;
