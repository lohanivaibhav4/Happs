import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login(){
    function login(formData){
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email,password)
    }
    return (
        <div className="form-container">
            <div>
                <h2>Welcome back !</h2>
                <p>Login to your account to get the most out of happs</p>
            </div>
            <form action={login}>
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                name="email"
                required
                />
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                name="password"
                required
                />
                <div className="login-ops">
                    <div>
                        <input type="checkbox" name="remember-login"/>
                        <label htmlFor="remember-login">Remember me</label>
                    </div>
                    <Link to='reset' className="forgot-link">Forgot password</Link>
                </div>
                <button className="form-btn" type="submit">Login</button>
            </form>
            <div className="g-login-div">
                <button className="form-btn g-login"><FcGoogle /></button>
                <p>Don't have an account? <Link to='../register'>Register</Link></p>
            </div>
            
        </div>
    )
}