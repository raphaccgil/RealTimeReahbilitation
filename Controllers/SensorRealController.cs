using WebAPP_Reahb_Server.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;


// COntrole para coleta dos dados no mongo

namespace WebAPP_Reahb_Server.Controllers
{
	public class SensorRealController : Controller
    {		
   		public IActionResult Test()
		{
			return Content("Hello world");
		}
		
		[HttpGet]
		public IActionResult Collect()
        {
            //Funcionou o retorno de todos os itens, agora precisamos retornar
            // todos os valores         
			MongoDBContext dBContext = new MongoDBContext();
			List<IotData> listaVal = dBContext.IotData.Find(m => true).ToList();

			return Json(listaVal);
        }
              
		[HttpGet]
		public async Task MainAsyncCont()
        {
			Console.Out.WriteAsync("passou????");
			var cancellationTokenSource = new CancellationTokenSource();
			await Task.Run(() => MainAsync(cancellationTokenSource.Token).GetAwaiter().GetResult(), cancellationTokenSource.Token);
        }

		private static async Task MainAsync(CancellationToken cancellationToken)

		{
			Console.Out.WriteAsync("passou????");
			var hubConnection = new HubConnectionBuilder()            
				.WithUrl("http://localhost:60672/iot")
                .Build();

			await hubConnection.StartAsync();

            // Esse será o ponto no qual irá alimentar o servidor com os dados coletados no mongodb
            MongoDBContext dBContext = new MongoDBContext();

            // colocar filtro de últimos 5 minutos de coleta
            List<IotData> listaVal = dBContext.IotData.Find(m => true).ToList();

            // preparar os dados

            List<Double> listaHead = new List<double>();

            foreach (var foo in listaVal)
            {
                listaHead.Add(foo.Head);  // RIGHT, foo properties are editable
            }
			while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(250, cancellationToken);
				Console.Out.WriteAsync("Ta rolando????");
                // Finally send the value:
				await hubConnection.SendAsync("Broadcast", "data", 10.0, cancellationToken);
            }

			await hubConnection.DisposeAsync();
		}

		[HttpGet]
		public IActionResult PrepCollect()
		{
			System.Diagnostics.Debug.WriteLine("hello world");
			MongoDBContext dBContext = new MongoDBContext();

            // colocar filtro de últimos 5 minutos de coleta
            List<IotData> listaVal = dBContext.IotData.Find(m => true).ToList();

			// preparar os dados

			List<Double>listaHead = new List<double>();

			foreach (var foo in listaVal)
            {
				listaHead.Add(foo.Head);  // RIGHT, foo properties are editable
            }

			return Json(listaHead);
		}
    }
}
