interface ComponenteFuncionProps {
    //Considerar
    primer: number | undefined;
    segundo: number | undefined;
};

const Suma = (props: ComponenteFuncionProps) => {
    //sigo mañana
    
    function sumar(x: number | undefined , y: number | undefined){
        const xi: number = (!!x) ? x : 0;
        const yi: number = (!!y) ? y : 0;
        return (xi - yi); 
    };
    
    return  sumar(props.primer,props.segundo).toString ;

}
export default Suma ;