import Cookies from "js-cookie";

export const logoutService=()=>{
    Cookies.remove('jwtToken');
    Cookies.remove('username');
    window.location.reload();
}