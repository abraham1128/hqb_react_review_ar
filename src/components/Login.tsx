import { useRef, useState } from 'react';

const Login = () => {
    //Hook y sigo mañana

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    //Considerar para inicializar
        
    let textEmail = useRef<any>(); 
    let textPassword = useRef<any>(); 

    const handlerChangeEmail = (event: any) => {
        const value = event.target.value;
        setEmail(value);
    }

    const handlerChangePassword = (event: any) => {
        const value = event.target.value;
        setPassword(value);
    }


    const handlerUserFormSubmit = (event: any) =>  { 
        event.preventDefault()
        
        if (email.length>0)
        {
            textEmail.current.focus();
            return;
        }
            
        else if (password.length>0){
            textPassword.current.focus();
            return;
        }
        else
        {
            console.log(email+' '+password);
            alert('Favor ver consola el bug');
        }
    }

    return (
        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Sign In</h1>
                        <p className="text text-normal">New user? <span>
                            <a href="#" className="text text-links">Create an account</a></span>
                        </p>
                    </div>
                    <form name="login" className="form" onSubmit={handlerUserFormSubmit}>
                        <div className="input-control">
                            <label htmlFor="email" className="input-label" hidden>Email Address</label>
                            <input type="email" name="email" className="input-field" placeholder="Email Address" ref={textEmail} onChange={handlerChangeEmail} value={email}></input>
				        </div>
                        <div className="input-control">
                            <label htmlFor="password" className="input-label" hidden>Password</label>
                            <input type="password" name="password" className="input-field" placeholder="Password" ref={textPassword}  onChange={handlerChangePassword} value={password}></input>
				        </div>
                            <div className="input-control">
                                <a href="#" className="text text-links">Forgot Password</a>
                                <button name="submit" className="input-submit">Login</button>
				            </div>
			        </form>
                        <div className="striped">
                            <span className="striped-line"></span>
                            <span className="striped-text">Or</span>
                            <span className="striped-line"></span>
                        </div>
                        <div className="method">
                        <div className="method-control">
                            <a href="#" className="method-action">
                                <i className="ion ion-logo-google"></i>
                                <span>Sign in with Google</span>
                            </a>
                        </div>
                        <div className="method-control">
                            <a href="#" className="method-action">
                                <i className="ion ion-logo-facebook"></i>
                                <span>Sign in with Facebook</span>
					        </a>
                        </div>
                            <div className="method-control">
                                <a href="#" className="method-action">
                                    <i className="ion ion-logo-apple"></i>
                                    <span>Sign in with Apple</span>
					            </a>
                            </div>
                        </div>
		        </section>
	        </div>
        </main> ) ;
}
export default Login