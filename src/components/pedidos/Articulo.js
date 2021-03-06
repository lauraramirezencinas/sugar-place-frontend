import React, { Component } from 'react';



export class Articulo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            producto: ""
        }
    }


    refresh = ()=>{
        this.props.totalpedido(this.props.nombre, this.props.qte )
    }

    render() {
         
        let total = this.props.prod.precio * this.props.prod.quantity
        let producto = ""
        if (this.props.prod.quantity === 0) {
            producto = ""
        } else {
            producto =
                <div className="row articulo">
                    <div className="col">
                    {this.props.prod.quantity} x {this.props.prod.nombre}
                    </div>
                    <div className="col">
                        Precio: {this.props.prod.precio}€
                    </div>
                    <div className="col">
                        Total: {total}€
                    </div>
                </div>
        }

        return (
            <div className="">
                {producto}             
            </div>

        )
    }
}

export default Articulo
