import React from 'react';
import TipoDocumento from '../data/TipoDocumento';

const ListarDocumento = () => {

    const detalleTipoDocumento = TipoDocumento.map((detalle) =>
        <tr key={detalle.id}>
            <td>{detalle.id}</td>
            <td>{detalle.codigo}</td>
            <td>{detalle.nombre}</td>
        </tr>
    );

    return (
        <div>
            <h2>Documentos Contables</h2>
            <table className="table table-striped" >
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Código</th>
                        <th scope="col">Glosa</th>
                    </tr>
                </thead>
                <tbody>
                    {detalleTipoDocumento}
                </tbody>
            </table>
        </div>
    )

};

export default ListarDocumento;