import { useState } from 'react';

const Login = () => {
    //Hook y sigo mañana

    //Considerar para inicializar
    const [listaDesarrollador, setListaDesarrollador] = useState<any>([]);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState<number>();

    const [tienePantalla, setTienePantalla] = useState(false);;

    const handlerChangeName = (event: any) => {
        const value = event.target.value;
        setNombre(value)
    }

    const handlerChangeAge = (event: any) => {
        const value = event.target.value;
        setEdad(value)
    }

    const handlerChangeIsMonitor = (event: any) => {
        //const value = event.target.value === 'checkbox' ? event.target.checked : event.target.value;
        const value = event.target.value;
        setTienePantalla(value)
    }


    const handlerUserFormSubmit = (event: any) => {
        event.preventDefault()

        console.log(event.target.value);

        const con = 'tiene pantalla';
        const sin = 'no tiene pantalla';

        const desarrollador = {
            nombre,
            edad,
            tienePantalla,
            glosa: '',
        }

        if (tienePantalla)
            desarrollador.glosa = con;
        else
            desarrollador.glosa = sin;

        const nuevaLista = [...listaDesarrollador, desarrollador]
        setListaDesarrollador(nuevaLista);
    }

    return (
        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Sign In</h1>
                        <p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
                        </p>
                    </div>
                    <form name="login" className="form">
                        <div className="input-control">
                            <label htmlFor="email" className="input-label" hidden>Email Address</label>
                            <input type="email" name="email" className="input-field" placeholder="Email Address"></input>
				        </div>
                        <div className="input-control">
                            <label htmlFor="password" className="input-label" hidden>Password</label>
                            <input type="password" name="password" className="input-field" placeholder="Password"></input>
				        </div>
                            <div className="input-control">
                                <a href="#" className="text text-links">Forgot Password</a>
                                <input type="button" name="submit" className="input-submit" value="Login" disabled></input>
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