import {  useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {signInUser}= useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disable, setDisable]= useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(location)


    useEffect(()=>{
     loadCaptchaEnginge(6); 
    },[])
const handleForm = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    signInUser(email,password)
    .then(res =>{
       
        Swal.fire({
            icon: "success",
            title: "Login",
            text: "Success Full",
            
          });
          navigate(from, { replace: true });
          
          console.log(res)
    })
    .catch(error=>console.log(error))
}
const handleValidateChaptcha = (e) =>{
    // const user_captcha_value = captchaRef.current.value;
    const user_captcha_value = e.target.value;
    if(validateCaptcha(user_captcha_value)){
        setDisable(false)
    }
    else{
        setDisable(true)
    }
    console.log(user_captcha_value)
}
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                       <div className="border mb-2 rounded-lg">
                       <LoadCanvasTemplate />
                       </div>
                            <input onBlur={handleValidateChaptcha} type="text" ref={captchaRef} name="" placeholder="text to up value" className="input input-bordered" required />
                            <p  className="btn btn-xs mt-2"> Validate</p>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disable} className="btn btn-primary" type="submit" value="Login" name="" id="" />
                        </div>
                    </form>
                    <p>do not account ? <Link to={'/signUp'}>Sign Up</Link></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;