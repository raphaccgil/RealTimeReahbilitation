import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Layout } from "./Layout"
export class Home extends Component {
  render() {
    return (
      <div>
        <Layout/>
        <h1>.</h1>
        <h1>Dados Paciente</h1>
        <p>
          <label></label>
          <input type = ""
                 id = "SelectionUser"
                 value = "Carlos" />
        </p>
        <p>
          <label>Nome Paciente</label>
          <input type = ""
                 id = "NomeUser"
                 value = "Carlos Alberto" />
        </p>
        <p>
          <label>Idade Paciente</label>
          <input type = ""
                 id = "IdadeUser"
                 value = "33" />
        </p>
        <p>
          <label>RG</label>
          <input type = ""
                 id = "RGUser"
                 value = "xxxxxxxxx" />
        </p>
        <p>
          <label>Endereço paciente</label>
          <input type = ""
                 id = "EnderecoUser"
                 value = "Rua Vitoriano 123" />
        </p>
        <p>
          <label>Tempo exercício</label>
          <input type = ""
                 id = "TempoExercicioUser"
                 value = "5 minutos" />
        </p>
        <p>
          <label>Horário realização exercício</label>
          <input type = ""
                 id = "HorarioUser"
                 value = "13:30" />
        </p>
      </div>
    );
  }
}
