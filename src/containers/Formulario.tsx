import CabeceraUsuario from '../components/CabeceraUsuario';
import Cabecera from '../components/Cabecera';

const Formulario = () => {
    //Hook y sigo mañana


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





    if (isLoggedIn) {
        return <CabeceraUsuario />;
    }
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Fixed navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>


        <main className = "container">
            <form onSubmit={handlerUserFormSubmit}>
            Nombre:
                <input type="text" id="username" onChange={handlerChangeName}/>
                <button classNameName="btn btn-secondary">Acceder</button>
            </form>   
        </main>


    )
        ;

    //Considerar para inicializar







}
export default Formulario