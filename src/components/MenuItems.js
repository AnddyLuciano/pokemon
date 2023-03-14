import SignIn from '../routes/SignIn';
import Home from './../routes/Home';
import Pokedex from './../routes/Pokedex';
import Contact from '../routes/Contact';

export const MenuItems=[{title:'Home',url:'/',className:'nav-link',icon:'',route:<Home/>},{title:'Pokedex',url:'/Pokedex',className:'nav-link',icon:'',route:<Pokedex/>},{title:'Contact',url:'/Contact',className:'nav-link',icon:'',route:<Contact/>}]
export const ButtonSign={title:'Sign in',url:'/Sign-in',className:'btn btn-primary shadow',route:<SignIn/>}
export const ButtonLogout={title:'Logout',url:'/Logout',className:'btn btn-primary shadow btnLogout dropdown-toggle'}
