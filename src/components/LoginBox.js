import loginImg from './../assets/mewtwo.jpg';
import './LoginBox.css';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const LoginBox =()=>{
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
    const er = document.querySelector(".error");
    const btnSubmit = document.querySelector('#btn-submit');
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleLogin(username, password);
        Cookies.set('username',username);
    }
    const handleLogin = async(username,password)=>{
        try{
            const response = await fetch('http://localhost:4000/api/login', {
                method: "POST",
                body: JSON.stringify({username,password}),
                headers:{"Content-Type":"application/json"},
            });
            if(!response.ok){
                er.classList.remove("d-none");
                const data = await response.json();
                setError(data.message);
                setUsername(null);
                setPassword(null);
                return error;
            }
            btnSubmit.setAttribute('data-bs-toggle',"modal");
            const data = await response.json();
            Cookies.set('jwtToken',data.token,{expires:1});
            if(isClicked===false){
                setTimeout(refreshWindow,4000);
            }
        }
        catch(e){
            setError('An error occurred while fetching data.');
        }
    }
    function refreshWindow(){
        navigate('/Pokedex');
        window.location.reload(false);
    }
    function clicked(){ 
        setIsClicked(true);   
        refreshWindow();
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-12 col-xl-10">
                    <div className="card-login o-hidden border-0 my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-flex">
                                    <div className="flex-grow-1">
                                        <img alt={'login-img'} src={loginImg} className='login-img'/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box p-5">
                                        <div className="text-center">
                                            <h4 className="mb-4">Welcome Back!</h4>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className='alert alert-danger error d-none'>{error}</div>
                                            <div className="mb-3"><input id="inputLogin" className="form-control form-control-user" type="text" placeholder="Enter Your Login..." name="username" onChange={(event)=>setUsername(event.target.value)} required/>
                                            </div>
                                            <div className="mb-3"><input id="exampleInputPassword" className="form-control form-control-user" type="password" placeholder="Password" name="password" onChange={(event)=>setPassword(event.target.value)} required/></div>
                                            <div className="mb-3">
                                            </div>
                                            {username===''||username===null||password===''||password===null?<button className="mb-4 btn btn-primary d-block btn-user w-100" type="submit" data-bs-toggle="modal" data-bs-target="#welcome" disabled>Log In</button>:<button id='btn-submit' className="mb-4 btn btn-primary d-block btn-user w-100" type="submit" data-bs-toggle="#" data-bs-target="#welcome">Log In</button>}
                                            <div className="modal fade" id="welcome">
                                                <div className="modal-dialog modal-dialog-centered modal-sm modal-lg">
                                                    <div className="modal-content">
                                                    <div className="modal-header bg-success">
                                                        <h4 className="modal-title">Valid Login & Password</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={clicked}></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Welcome back <b>{username}</b>! 😃
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="link-login text-center"><Link className="small" to={'/SignUp'}>Create an Account!</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}