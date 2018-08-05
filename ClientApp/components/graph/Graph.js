import React, { Component, createClass } from "react";
import { RouteComponentProps } from "react-router";
import { Bar, Line, LineChart } from "react-chartjs-2";
import axios from 'axios';
import Websocket from 'react-websocket';  // websocket para coletar da API
import "isomorphic-fetch";
import { FetchData } from "../FetchData";
import { HubConnectionBuilder } from '@aspnet/SignalR';
import {Layout} from "../Layout";

var config = {};

const opt = {
    maintainAspectRatio: true,
    title:{
        display:true,
        text: 'Coleta pith, yam e roll',
        fontsize:40,
    },
    legend:{
        display:true,
        position:'right',
        fontsize:12
    }
}

const initialState = {
    title: {
        display: true,
        text: 'PLEASE DISPLAY FOR HEAVEN\'S SAKE'
    },
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
		label: 'Picth',
        borderColor: 'rgba(0,99,255,1)',
        backgroundColor: 'rgba(0,99,255,1)',
        borderWidth: 2,
        fill: false,
		data: [65, 59, 80, 81, 56]
    },
    {
		label: 'Average Picth',
        borderColor: 'rgba(0,99,155,1)',
        backgroundColor: 'rgba(0,99,155,1)',
        borderWidth: 2,
        fill: false,
		data: [65, 59, 80, 81, 56]
    },
    {
        label: 'Roll',
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        fill: false,
		data: [25, 76, 44, 81, 56]   
    },
    {
        label: 'Average Roll',
        borderColor: 'rgba(155,99,132,1)',
        backgroundColor: 'rgba(155,99,132,1)',
        borderWidth: 2,
        fill: false,
		data: [25, 76, 44, 81, 56]   
    },
    {
        label: 'Head',
        borderColor: 'rgba(50,150,25,1)',
        backgroundColor: 'rgba(50,150,25,1)',
        borderWidth: 2,
        fill: false,
		data: [25, 76, 44, 81, 56]   
    },
    {
        label: 'Average Head',
        borderColor: 'rgba(50,100,25,1)',
        backgroundColor: 'rgba(50,100,25,1)',
        borderWidth: 2,
        fill: false,
		data: [25, 76, 44, 81, 56]   
    }
  ],
};

//https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/crazyLine.js
var createReactClass = require('create-react-class');
const Graphval = createReactClass({
	displayName: 'Graph',
	componentWillMount(){
        this.setState(initialState);
        
	},
	componentDidMount(){

        var messagecollect = [] 
        console.log("Erro aqui?")
        const hubConnection = new HubConnectionBuilder()
        .withUrl('/iot')
        .build();
        
        hubConnection.start().catch(err => console.error(err.toString()));   
        // Inicio da coleta
        hubConnection.on("Broadcast", (message, user) => {
            const msg = message;
            console.log(user)  // aqui é coletado o cliente dos dados, nao apagar durante teste
            this.state.encodedMsg = user;  // usar aqui os dados
        });
        
        var _this = this;

		setInterval(function(){
            var oldDataSet1 = _this.state.datasets[0];
            var oldDataSet2 = _this.state.datasets[1];
            var oldDataSet3 = _this.state.datasets[2];
            var oldDataSet4 = _this.state.datasets[3];
            var oldDataSet5 = _this.state.datasets[4];
            var oldDataSet6 = _this.state.datasets[5];
            var datawebsock = _this.state.encodedMsg 

			var newData = [[], [], []];

			for(var x=0; x< _this.state.labels.length; x++){
                newData[0].push(Math.floor(Math.random() * 100));
                newData[1].push(Math.floor(Math.random() * 100));
                newData[2].push(Math.floor(Math.random() * 100));
            }

            // aqui é somente para testes
            var new_date = [[], [], [], [], []]
            for (var x=0; x<datawebsock.length; x++){
                new_date[0].push(Math.random() + datawebsock[x])
                new_date[1].push(Math.random() + datawebsock[x])
                new_date[2].push(Math.random() + datawebsock[x])
                new_date[3].push(Math.random() + datawebsock[x])
                new_date[4].push(Math.random() + datawebsock[x])

            }

			var newDataSet1 = {
				...oldDataSet1
            };
            var newDataSet2 = {
				...oldDataSet2
            };
            var newDataSet3 = {
				...oldDataSet3
            };

            var newDataSet4 = {
				...oldDataSet4
            };

            var newDataSet5 = {
				...oldDataSet5
            };

            var newDataSet5 = {
				...oldDataSet5
            };

            var newDataSet6 = {
				...oldDataSet6
            };
            newDataSet1.data = datawebsock;
            newDataSet2.data = new_date[0];
            newDataSet3.data = new_date[1];
            newDataSet4.data = new_date[2];
            newDataSet5.data = new_date[3];
            newDataSet6.data = new_date[4];

			var newState = {
				...initialState,
				datasets: [newDataSet1, newDataSet2, newDataSet3, newDataSet4, newDataSet5, newDataSet6]
            };
			_this.setState(newState);
        }, 5000);
        this.FetchData();
    },

    FetchData()
    {
        fetch("SensorReal/MainAsyncCont")
        .then(response => response)
        .then(response => console.log(response))
        .catch(error => console.log(`parsed fail`, error));
    },

	render() {
		return (
			<Line options={opt} data={this.state} />
		);
	}
});

export class Graph extends Component {
    constructor(props){
        super(props);
        this.state = initialState
    }
    render() {
      return (
    <div>
        <Layout/>
        <h1>Vamos explorar os dados em tempo real</h1>
            <p>Test val2</p> 
            <p>  </p>
        <div className="container">
        <div className="row">&nbsp;</div>
        <div className="row">
            <div className="col-6">&nbsp;</div>
        </div>
        <div className="row">
            <div className="col-12">
                <hr />
                <div className="chart">
                <Graphval
                />
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6">&nbsp;</div>
            <div className="col-6">
                <ul id="messagesList"></ul>
            </div>
        </div>
    </div>
    </div> 
    )
    }
}
