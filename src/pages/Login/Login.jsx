import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const {signIn}= useContext(AuthContext);

    const handleLogin= e=>{
        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const email= form.get('email');
        const password= form.get('password')

        console.log(email, password);

        //  create sign In

        signIn(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (

        <div>

            <NavBar></NavBar>

            <h2 className="text-2xl text-center my-10">Please Login</h2>

            <form onSubmit={handleLogin} className="lg:w-1/2 w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

            <p className="text-center mt-4">Don&apos;t have an account? <Link to={'/register'} className="text-blue-700 font-bold">Register</Link></p>




        </div>

    );
};

export default Login;