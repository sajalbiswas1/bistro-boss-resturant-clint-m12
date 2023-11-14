import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable]= useState(true)
    useEffect(()=>{
     loadCaptchaEnginge(6); 
    },[])
const handleForm = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
}
const handleValidateChaptcha = () =>{
    const user_captcha_value = captchaRef.current.value;
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
                       <LoadCanvasTemplate/>
                       </div>
                            <input type="text" ref={captchaRef} name="" placeholder="text to up value" className="input input-bordered" required />
                            <Link onClick={handleValidateChaptcha} className="btn btn-xs mt-2"> Validate</Link>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disable} className="btn btn-primary" type="submit" value="Login" name="" id="" />
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;