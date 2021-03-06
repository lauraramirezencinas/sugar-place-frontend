import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import EditProfile from '../profile/EditProfile';
import Map from './Map';



export class Bakery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
        this.openModal = this.openModal.bind();
        this.closeModal = this.closeModal.bind();
    }
    openModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }


    render() {

        
        let bakery = "";

        if (this.props.user) {
            if (this.props.profile) {
                bakery =
                    <>
                        <div className="col-xs-12 col-md-4 mt-20">
                            <img src={this.props.user.logoUrl} className="img-perfil rounded-circle" alt="logo" />
                        </div>
                        <div className="col-xs-12 col-md-4 mt-20">
                            <p className="bak-campos">NOMBRE:  <span className="bak-val">{this.props.user.nombre}</span></p>
                            <p className="bak-campos">APELLIDO:  <span className="bak-val">{this.props.user.apellido}</span></p>
                            <p className="bak-campos">EMAIL: <span className="bak-val">{this.props.user.email}</span></p>
                            <p className="bak-campos">DIRECCÓN: <span className="bak-val">{this.props.user.direccion.calleNumero} </span></p>
                            <p className="bak-campos">NOMBRE DE LA PANADERIA:  <span className="bak-val">{this.props.user.nombreNegocio}</span></p>
                            <p className="bak-campos">DESCRIPCION:  <span className="bak-val">{this.props.user.descripcion}</span></p>
                            <p className="bak-campos">HORARIO:  <span className="bak-val">{this.props.user.horario}</span></p>
                            <Button className="boton-editar" variant="primary" onClick={this.openModal}>Editar perfil</Button>
                            <EditProfile user={this.props.user} getUser={this.props.getUser} show={this.state.modalOpen} onHide={() => this.closeModal()}/>
                        </div>
                    </>
            } else {
                bakery =
                    <>
                        <div className="col-xs-12 col-md-4 mt-20 bakery">
                            <img src={this.props.user.logoUrl} className="img-perfil rounded-circle" alt="logo" />
                        </div>
                        <div className="col-xs-12 col-md-8 mt-20">
                            <h1 className="perfil mb-20 bakery">{this.props.user.nombreNegocio}</h1>
                            <p className="bak-campos">DESCRIPCION:  <span className="bak-val">{this.props.user.descripcion}</span></p>
                            <p className="bak-campos">DIRECCÓN: <span className="bak-val">{this.props.user.direccion.calleNumero} </span></p>
                            <p className="bak-campos">HORARIO:  <span className="bak-val">{this.props.user.horario}</span></p>
                           <Map bakery={this.props.user}/>
                        </div>
                    </>
            }
        }
        return (
            <div className="row container " >
                {bakery}
            </div>
        )
    }
}

export default Bakery
