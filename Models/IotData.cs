using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;

namespace WebAPP_Reahb_Server.Models
{
	public class IotData
	{
		//public Guid Id { get; set; }

		public ObjectId Id { get; set; }

		[Required]
		public double Pitch {get; set;}

		[Required]
		public double Head { get; set;}

		[Required]
		public double Roll { get; set;}

		[Required]
		[DataType(DataType.Date)]
		public DateTime Date { get; set; }

    }
}
