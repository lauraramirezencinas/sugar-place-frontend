import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class FormBaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreNegocio: "",
      descripcion: "",
      calle: "",
      numero: "",
      cuidad: "",
      horario: "",
      logoUrl: "",
      facebook: "",
      instagram: "",
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    let loggedInUser = JSON.parse(localStorage.getItem("user"));
    console.log(loggedInUser._id);
    const {
      nombreNegocio,
      descripcion,
      calle,
      numero,
      cuidad,
      horario,
    } = this.state;
    event.preventDefault();
    axios
      .patch(
        `http://localhost:3000/usuario/${loggedInUser._id}`,
        {
          nombreNegocio,
          descripcion,
          calle,
          numero,
          cuidad,
          horario,
        },
        { withCredentials: true }
      )
      .then((response) => response);
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="title-form">Panderia</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Nombre del Negocio</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="nombreNegocio"
              value={this.state.nombreNegocio}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="descripcion"
              value={this.state.descripcion}
              onChange={(e) => this.handleChange(e)}
            ></textarea>
            <small className="form-text text-muted">
              Introduce una descripcion de tu panaderia
            </small>
          </div>
          <h4>Dirección</h4>
          <div className="form-group">
            <label>Calle</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="calle"
              value={this.state.calle}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Numero</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="numero"
              value={this.state.numero}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Cuidad</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="cuidad"
              value={this.state.cuidad}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Horario</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="horario"
              value={this.state.horario}
              onChange={(e) => this.handleChange(e)}
            />
          </div>


          <button class="btn boton-form" type="submit">
            Guardar
          </button>

          {this.renderRedirect()}
        </form>
      </div>
    );
  }
}

export default FormBaker;
