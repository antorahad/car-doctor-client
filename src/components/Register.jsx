import { useContext } from "react";
import { Link } from "react-router-dom";
import register from "../assets/images/login/login.svg"
import { AuthContext } from "../provider/AuthProvider";
const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
           const user = result.user;
           console.log(user);
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-16">
                    <img src={register} />
                </div>
                <div className="card flex-shrink-0 -w-sm shadow-md w-1/2">
                    <h1 className="text-center text-4xl font-bold mt-5">Register</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name="name" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 text-white">Register</button>
                        </div>
                        <p>Have an account? <Link className="underline mt-3" to={'/register'}>Login</Link></p>
                        <p className="text-center text-sm font-bold py-5">Or</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;