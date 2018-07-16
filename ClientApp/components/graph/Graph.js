import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Bar, Line } from "react-chartjs-2";
import axios from 'axios';
import Websocket from 'react-websocket';  // websocket para coletar da API
import "isomorphic-fetch";
import { FetchData } from "../FetchData";
import { HubConnectionBuilder } from '@aspnet/SignalR';

export class Graph extends Component {
    constructor(props){
        
        super(props);
        
        this.state = {
            hubConnection: null,
            chartData:{
                labels: ['May1', 'May2', 'May3', 'May4', 'May5', 'May6'],
                datasets:[
                    {
                        label:'Picth',
                        borderColor:'black',
                        fill: false,
                        data:[130, 135, 134, 128, 133, 134]
                    },
                    {
                        label:'Head',
                        borderColor:'red',
                        bacngroundColor: 'red',
                        fill: false,
                        data:[20, 25, 26, 27, 26, 28],
                    },
                    {
                        label:'Roll',
                        borderColor:'green',
                        fill:false,
                        data:[90, 96, 97, 98, 97, 97],
                    }
                ]
            }
        }
    }
        componentDidMount()
        {
            var messagecollect = [] 
            console.log("Erro aqui?")
            const hubConnection = new HubConnectionBuilder()
            .withUrl('/iot')
            .build();
            
            hubConnection.start().catch(err => console.error(err.toString()));   
            //
            //hubConnection.on("ReceiveMessage", (user, message) => {
            //    const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            //    const encodedMsg = user + " says " + msg;
            //    const li = document.createElement("li");
            //    li.textContent = encodedMsg;
            //    document.getElementById("messagesList").appendChild(li);
            //});

            //document.getElementById("sendButton").addEventListener("click", event => {
            //    const user = document.getElementById("userInput").value;
            //    const message = document.getElementById("messageInput").value;
            //    hubConnection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
            //    event.preventDefault();
            //}); 
               
            hubConnection.on("Broadcast", (message, user) => {
                const msg = message;
                const encodedMsg = user;
                console.log(msg)
                console.log(encodedMsg)
            });

            document.getElementById("sendButton").addEventListener("click", event => {
                const user = (10.0);
                const message = ('alfa');
                console.log('Entrou?')
                //chartData.update();
                messagecollect = message;
                hubConnection.invoke("Broadcast", message, user).catch(err => console.error(err.toString()));
            });

            const alfa = 10.0
            hubConnection.invoke('Broadcast', alfa, alfa)
            console.log(messagecollect)

            console.log("Test")
            console.log(messagecollect)
            this.FetchData();
        }
        FetchData()
        {
            //fetch("SensorReal/Collect")
            fetch("SensorReal/MainAsyncCont")
            .then(response => response)
            .then(response => console.log(response))
            .catch(error => console.log(`parsed fail`, error));
        }
    render() {
      return (
    <div>
        <h1>Vamos explorar os dados em tempo real</h1>
            <p>Test val2</p> 
            <p>  </p>
            <Line
                data={this.state.chartData}
                options={{
                    maintainAspectRatio: true,
                    title:{
                        display:true,
                        text: 'Coleta pith, yam e roll',
                        fontsize:25,
                    },
                    legend:{
                        display:true,
                        position:'right',
                        fontsize:18
                    }
                }}
            />
        <div className="container">
        <div className="row">&nbsp;</div>
        <div className="row">
            <div className="col-6">&nbsp;</div>
            <div className="col-6">
                User..........<input type="text" id="userInput" />
                <br />
                Message...<input type="text" id="messageInput" />
                <input type="button" id="sendButton" value="Send Message" />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <hr />
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