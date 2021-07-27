type Documento = {
    id: number,
    nombre: string,
    codigo: string
};

const TipoDocumento: Documento[] =
    [
        {
            "id": 1,
            "nombre": 'FACTURA',
            "codigo": "CON3012"
        },
        {
            "id": 2,
            "nombre": 'HOJA DE RUTA',
            "codigo": "CON3013"
        },
        {
            "id": 3,
            "nombre": 'BOLETA',
            "codigo": "CON3014"
        },
        {
            "id": 4,
            "nombre": 'GUÍA DESPACHO',
            "codigo": "CON3015"
        },
        {
            "id": 5,
            "nombre": 'RESPALDO',
            "codigo": "CON3016"
        },
        {
            "id": 6,
            "nombre": "OTROS",
            "codigo": "CON3017"
        }
    ];

export default TipoDocumento ; 
