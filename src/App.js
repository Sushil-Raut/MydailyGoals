import './App.css';
import Header from './Component/Header';
import Home from './Component/Home'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   <div>
   <Header/>
   <Home/>
    
   </div>
   </BrowserRouter>
    
     


    
  );

}

export default App;
