using WebAPP_Reahb_Server.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

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
		public IActionResult PrepCollect()
		{
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
