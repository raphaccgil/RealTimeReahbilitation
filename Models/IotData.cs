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
		public double pitch {get; set;}

		[Required]
		public double pitch_median { get; set; }

		[Required]
		public double yam { get; set;}

		[Required]
		public double yam_median { get; set; }

		[Required]
		public double roll { get; set;}

		[Required]
		public double roll_median { get; set; }

		[Required]
		//[DataType(DataType.Date)]
		//public DateTime datetime_int { get; set; }

		public string datetime_int { get; set; }
              	      
        public long datetime { get; set; }
        
        public string game_selection { get; set; }
        
		public long name_patient { get; set; }
        
		public string id_patient { get; set; }


    }
}
