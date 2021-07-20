import React, { FormEvent, useState } from 'react';

type Usuario = {
    username: string,
    nombre: string,
    apellido: string,
    activo: Boolean
};


const FormularioUsuario = () => {
    //Hook y sigo mañana
    
    const [usuario, setUsuario] = useState<Usuario>({
        username: 'abraham.rodriguez',
        nombre: 'Abraham',
        apellido: 'Rodriguez',
        activo: false
    });

    const handleInput = (event: any): void => {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        });
    };

    //Considerar para inicializar


    const handlerUserFormSubmit = (event: FormEvent): void => {
        event.preventDefault();
        console.log(JSON.stringify(usuario));
        if (usuario.activo)
            alert('El usuario '+usuario.username+' se encuentra ACTIVO');
        else
            alert('El usuario '+usuario.username+' se encuentra INACTIVO');

    };
   
    return (
        <div id="section-contact" className="container text-start">
            <h2>Administrador Usuario</h2>
            <form onSubmit={handlerUserFormSubmit}>

                <div className="row">
                    <div className="col-xs-12 col-sm-8 mb-3">
                        <label htmlFor="Username" className="form-label">Usuario</label>
                        <input id="username" name="username" type="text" className="form-control" onChange={handleInput} required readOnly value={usuario.username}  />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-8 mb-3">
                        <label htmlFor="Nombre" className="form-label">Nombre</label>
                        <input id="Nombre" name="Nombre" type="text" className="form-control" onChange={handleInput} required value={usuario.nombre}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-8 mb-3">
                        <label htmlFor="Apellido" className="form-label">Apellido</label>
                        <input id="apellido" name="apellido" type="text" className="form-control" onChange={handleInput} required value={usuario.apellido} />
                    </div>
                </div>

                <div className="row">

                    <div className="col-xs-12 col-sm-8 mb-3">
                        <label htmlFor="activo" className="form-label">Activo</label>
                        
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" id="activo" name="activo"  onChange={handleInput} checked={usuario.activo} />
                            </div>
                        </div>   
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-8 mb-3">
                        <input type="submit" className="btn btn-secondary" value="Confirmar" />
                    </div>
                </div>
            </form>
        </div>
    );
}
export default FormularioUsuario