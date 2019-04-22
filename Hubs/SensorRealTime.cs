using Microsoft.AspNetCore.SignalR;
using WebAPP_Reahb_Server.Models;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;


namespace WebAPP_Reahb_Server.Hubs
{
	public class SensorRealTime : Hub
	{
		//public async Task SendMessage(string user, string message)
		//{
		//	await Clients.All.SendAsync("ReceiveMessage", user, message);
		//}
		public async Task Broadcast(string sender, List<double> measurement)
		{	       
			await Clients.All.SendAsync("Broadcast", sender, measurement);
			Console.WriteLine("EAE CARAIO");
				// Do not Broadcast to Caller:
				//    .AllExcept(new[] {Context.ConnectionId})
				// Broadcast to all connected clients
				//	.SendAsync("ReceiveBroadcast", sender, measurement);
		}
	}

}
    	
		//public SensorRealTime()
        //{
    	//	//Connection to mongo server and system co           
    	//	MongoDBContext dBContext = new MongoDBContext();
        //
            // aqui realizar a query dos dados
            
    	//	List<IotData> listData = dBContext.IotData.Find(m => true).ToList();

    	//	List<Double> listTest = new List<double>();

    	//	foreach (var foo in listData)
        //    {
        //   
    	//		listTest.Add(foo.Head);  // RIGHT, foo properties are editable
        //       
        //    }


    	//	using (var enumerator = cursor.GetEnumerator())
        //    {
        //        while (enumerator.MoveNext())
        //        {
        //            var document = enumerator.Current;
        //
        //           //Sent data to client method 'updateData'
        //            Clients.All.updateData(document.ToJson());
        //
        //            /* Read data from collection with name 'UI' */
        //            var databaseTest = server.GetDatabase("Test");
        //            var uiCollectionData = databaseTest.GetCollection("UI").FindAll();
        //            //Send data to client method 'updateUiData'
        //            Clients.All.updateUiData(uiCollectionData);


      //  }
//    }

