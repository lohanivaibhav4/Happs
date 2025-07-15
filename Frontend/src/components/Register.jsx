import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";

export default function Register(){
    function register(formData){
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email, name, password)
    }
    return(
        <div className="form-container register-container">
            <div>
                <h2>Create an account</h2>
                <p>Create an account to use all features</p>
            </div>
            <form action={register}>
                <label htmlFor="name">Name</label>
                <input 
                type="name"
                name="name"
                required
                />
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
                
                <button className="form-btn" type="submit">Register</button>
            </form>
            <div className="g-login-div">
                <button className="form-btn g-login"><FcGoogle /></button>
                <p>Already have an account? <Link to='../login'>Login</Link></p>
            </div>
            
        </div>
    )
}