import React from 'react';

export interface ComponenteClaseProps {
    primer: number ;
    segundo: number ;
};

class ClaseResta extends React.Component<ComponenteClaseProps, string> {

    restar(x: number | undefined , y: number | undefined){
        const xi: number = (!!x) ? x : 0;
        const yi: number = (!!y) ? y : 0;
        return (xi - yi).toString ; 
    };

    render(){
        return  this.restar(this.props.primer, this.props.segundo).toString;
    };
};

export default ClaseResta;