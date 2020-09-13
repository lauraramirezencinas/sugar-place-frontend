import React, { Component } from 'react'
import Bakery from './bakerys/Bakery'
import axios from 'axios'
import ProductsGrid from './productos/ProductsGrid'
import Pedido from './pedidos/Pedido';




export class Tienda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            pedido: {}, 

        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/usuario/` + this.props.match.params.id, { withCredentials: true })
            .then(response => {
                this.setState({ user: response.data })

            })
    }

    modifyItem = (itemId, quantity, precio, nombre, idUsuario) => {
        let pedido = this.state.pedido
        pedido[itemId] = {
            quantity:quantity,
            precio:precio,
            nombre:nombre,
            idUsuario:idUsuario
        }
        this.setState({
            pedido: pedido
        })
        console.log(pedido)

    }


    render() {
        
        let pedido = ""
        if (Object.keys(this.state.pedido).length===0) {
            pedido=""
        }else{
            pedido =
                <div className="pedido">
                    <div className="container">
                        <Pedido pedido={this.state.pedido} ordenFinalizada={this.ordenFinalizada} />
                    </div>
                </div>
        }

        return (
            <div>
                <div className="container tienda mb-60">
                    <h1 className="mt-30 perfil">Tienda</h1>
                    <Bakery user={this.state.user} />
                    <ProductsGrid userId={this.props.match.params.id} modifyItem={this.modifyItem} />
                </div>
                {pedido}
            </div>
        )
    }
}

export default Tienda
