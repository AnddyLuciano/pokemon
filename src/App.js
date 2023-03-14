import './App.css';
import Navbar from'./components/Navbar';
import {Route, Routes} from 'react-router-dom';
import { ButtonSign } from './components/MenuItems';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Pokedex from './routes/Pokedex';
import Error404 from './routes/Error404';
import Footer from './components/Footer';

const App =()=>{

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Pokedex' element={<Pokedex/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path={ButtonSign.url} element={ButtonSign.route}/>
          <Route path='/Error404' element={<Error404/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        <Footer/>
      </header>
    </div>
  );
};
export default App;
