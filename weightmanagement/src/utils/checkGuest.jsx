import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export const checkGuest = (Component) =>{
    function Wrapper(props){
        let user = useSelector(store=>store.auth.user);
        const navigate = useNavigate();
        useEffect(()=>{
            if(user){
                navigate('/profile');
            }
        },[user])
        return  <Component {...props}/>;
    }
    return Wrapper;
}

export default checkGuest;