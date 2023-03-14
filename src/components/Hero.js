import "./Hero.css";
import pOak from './../assets/pxfuel.jpg'
import { Link } from "react-router-dom";

function Hero(){
    return (
        <>
            <div className='mx-auto'>
                <div className="hero">
                    <div className='row gotta'>
                        <h1>GOTTA CATCH 'EM ALL</h1>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='img-hero col-md-6 mb-5'>
                            <img src={pOak} alt='hero' className="img-hero img-fluid"></img>
                        </div>
                        <div className='col-md-6 mb-5'>
                            <div className='row intro'>
                                <p className='red-intro'><i>"Hello there! Welcome to the world of pokémon! My name is Oak! People call me the pokémon Prof! This world is inhabited by creatures called pokémon! For some people, pokémon are pets. Others use them for fights. Myself... I study pokémon as a profession."</i>
                                <b>--Professor Oak</b></p>
                                <div className="btn-intro">
                                    <Link className='btn btn-primary shadow' role="button" to='/Pokedex'>See Pokemons</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Hero;