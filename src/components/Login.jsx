import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg"

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-16">
                    <img src={login} />
                </div>
                <div className="card flex-shrink-0 -w-sm shadow-md w-1/2">
                    <h1 className="text-center text-4xl font-bold mt-5">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 text-white">Login</button>
                        </div>
                        <p>Do not have an account? <Link className="underline mt-3" to={'/register'}>Register</Link></p>
                        <p className="text-center text-sm font-bold py-5">Or</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;