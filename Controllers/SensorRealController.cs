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
using System.Web;


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
			//Console.Out.WriteAsync("passou????");
			var cancellationTokenSource = new CancellationTokenSource();
			await Task.Run(() => MainAsync(cancellationTokenSource.Token).GetAwaiter().GetResult(), cancellationTokenSource.Token);
        }

		private static async Task MainAsync(CancellationToken cancellationToken)

		{
			//Console.Out.WriteAsync("passou????");
			var hubConnection = new HubConnectionBuilder()            
				.WithUrl("http://localhost:60672/iot")
                .Build();


			//CancellationToken disconnectedToken = Response.ClientDisconnectedToken;
            //using (var source = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, disconnectedToken))
       
			await hubConnection.StartAsync();

            // Esse será o ponto no qual irá alimentar o servidor com os dados coletados no mongodb
            MongoDBContext dBContext = new MongoDBContext();
            
            // colocar filtro de últimos 5 minutos de coleta
         
			List<IotData> listaVal = dBContext.IotData.Find(m => true).SortByDescending(e => e.datetime).Limit(100).ToList();

			// preparar os dados
			List<JsonClass> listback = new List<JsonClass>();
         
            foreach (var foo in listaVal)
            {
				listback.Add(
					new JsonClass
					{
						pitch = foo.pitch,
						pitch_median = foo.pitch_median,
						yam = foo.yam,
						yam_median = foo.yam_median,
						roll = foo.roll,
						roll_median = foo.roll_median
					}
				);
			}
			//Console.WriteLine(listback);
			       
			while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(2000, cancellationToken);
                // Finally send the value:
				await hubConnection.SendAsync("Broadcast", "data", listback, cancellationToken);
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
				listaHead.Add(foo.yam);  // RIGHT, foo properties are editable
            }

			return Json(listaHead);
		}
    }
}
