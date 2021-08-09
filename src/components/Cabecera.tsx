import { useState } from 'react';


const Cabecera = () => {
    //Hook y sigo mañana
    //Considerar para inicializar

    return (
        <header>
            <div classNameName="container">
                <nav classNameName="navbar navbar-inverse">
                    <div classNameName="container-fluid">
                        <div classNameName="navbar-header">
                            <a classNameName="navbar-brand" href="#">Cabecera</a>
                        </div>
                        <ul classNameName="nav navbar-nav">
                            <li classNameName="active"><a href="#">Hola</a></li>
                            <li classNameName="dropdown">
                                <a classNameName="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
                                    <span classNameName="caret"></span></a>
                                <ul classNameName="dropdown-menu">
                                    <li><a href="#">Page 1-1</a></li>
                                    <li><a href="#">Page 1-2</a></li>
                                    <li><a href="#">Page 1-3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Cabecera