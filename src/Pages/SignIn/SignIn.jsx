import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const SignIn = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit,reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        createUser(data.email,data.password)
        .then(result => {
            console.log(result)
            updateUser(data.name, data.igmUrl)
            .then(res =>{
                console.log(res)
                reset()
            })
            .catch(error =>{
                console.log(error)
            })
        })
        console.log(data)
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | SignIn</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input {...register("name", { required: true })} placeholder="enter your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image url</span>
                                </label>
                                <input {...register("igmUrl", { required: true })} placeholder="enter your img url" className="input input-bordered" />
                                {errors.igmUrl && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/ },)} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500">Maximum Limit</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Minimum Limit</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500">Must be 1 number small latter capital later special character</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" name="" id="" />
                            </div>
                        </form>
                        <p className="p-3">already account ? <Link to={'/login'}>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;