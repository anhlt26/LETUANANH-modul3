import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/accountAction";

function LoginComponent(){

    const account = useSelector(state=>state.user.account);

    const dispath = useDispatch;

    const usernameRef = useRef();
    const passwordRef = useRef();  
    const handleLogin = ()=>{
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        const loginInfor = {
            username:username,
            password: password
        }
        console.log(loginInfor)
        dispath(login(loginInfor));

    };
    return(
        <form>
        <h3>Login {account&&account.username}</h3>
        <div>
            <label>Username</label>
            <input ref={usernameRef} name={"username"}/>
        </div>
        <div>
            <label>Password</label>
            <input ref={passwordRef} name="password"/>
        </div>
        <div>
            <button onClick={handleLogin} type={"button"}>Login</button>
        </div>
        </form>
    )
}
export default LoginComponent;