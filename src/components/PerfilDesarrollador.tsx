import { useState} from 'react';

const PerfilDesarrollador = () => {
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

        const con = 'tiene pantalla' ;
        const sin = 'no tiene pantalla' ;

        const desarrollador = {
            nombre,
            edad,
            tienePantalla,
            glosa : '',
        }

        if (tienePantalla)
            desarrollador.glosa = con ;
        else 
            desarrollador.glosa = sin ;

        const nuevaLista = [...listaDesarrollador, desarrollador]
        setListaDesarrollador(nuevaLista);
    }

    return (
        <div>
            <form onSubmit={handlerUserFormSubmit}>
                Nombre:
                <input
                    type="text"
                    id="name"
                    value={nombre}
                    onChange={handlerChangeName}
                />
                Edad:
                <input
                    type="text"
                    id="age"
                    value={edad}
                    onChange={handlerChangeAge}
                />
                Pantalla:
                <input
                    type="checkbox"
                    id="isMonitor"
                    checked={tienePantalla}
                    onChange={handlerChangeIsMonitor}
                />
                <button className="btn btn-secondary">Crear</button>
               
            </form>
            <h2>Documentos Contables</h2>
            <table className="table table-striped" >
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Pantalla</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {listaDesarrollador.map((desarrollador: any) => (
                        <tr>
                            <td>{desarrollador.nombre}</td>
                            <td>{desarrollador.edad}</td>
                            <td>{desarrollador.glosa}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p></p>
            <button className="btn btn-secondary">Limpiar</button>
        </div>
    )
}
export default PerfilDesarrollador