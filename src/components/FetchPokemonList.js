import axios from "axios";
import { useEffect, useState } from "react";
import './FetchPokemonList.css';
import './TypeColor.css';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const FetchPokemonList = ()=>{
  const [pok, getPok] = useState([]);
  const [data, setData] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    const token = Cookies.get('jwtToken')
    if(token){
      axios.get(`http://localhost:4000/api/pokemons?name=${data}`,{
      headers:{Authorization:`Anddy ${token}`}
      })
      .then(res=>res.data)
      .then(res=>{
        return res.data;
      })
      .then(res=>{
        return res;
      })
      .then(pok=>getPok(pok));
    }
    else{
      alert('You need to enter your login in order to see pokemons');
      navigate('/Sign-in');
    }
  },[data,navigate]);
  return(
    <>
    <div>
    <form className='section-tri'>
      <div className="tri">
      <div className="row">
          <h4>Search a pokemon:</h4>
      </div>
      <div className="row">
          <div>
          <input className="form-control form-control-lg" type="text" placeholder="Enter the name..." onChange={(event)=>setData(event.target.value)}/>
          </div>
      </div>
      </div>
    </form>
    </div>
    
    <div className="section-pokemon">
      <div className="getImg">
        {
          pok.length<1?<h2 className="em10">no such pokemon</h2>: pok.map((pokemon)=>{
            return(
              <div key={pokemon.id} className='all-pokemons'>
                <div className='pokemon-card'>
                  <img src={pokemon.img} alt={pokemon.name} className='pokemon-img img-fluid'/>
                  <h3 className="pokemon-name">{pokemon.name}</h3>
                  <div className="types">
                    {pokemon.type.map((t,key)=>{
                      const types = [{type:'Grass',className:'pin green'},{type:'Poison',className:'pin purple'},{type:'Fire',className:'pin red'},{type:'Flying',className:'pin water-green'},{type:'Water',className:'pin blue'},{type:'Bug',className:'pin bpurple'},{type:'Normal',className:'pin brown'},{type:'Electric',className:'pin yellow'},{type:'Ground',className:'pin black-caraway'},{type:'Fighting',className:'pin black'},{type:'Psychic',className:'pin pink'},{type:'Rock',className:'pin grey'},{type:'Ghost',className:'pin white'},{type:'Ice',className:'pin sky-blue'},{type:'Dragon',className:'pin orange'}];
                      const type = types.filter(validType=>t===validType.type)
                      return(
                        <p key={key} className={type[0].className}>{type[0].type}</p>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}