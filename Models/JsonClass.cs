using System;
using System.ComponentModel.DataAnnotations;
namespace WebAPP_Reahb_Server.Models
{
    public class JsonClass
    {
        
		[Required]
        public double pitch { get; set; }

        [Required]
        public double pitch_median { get; set; }

        [Required]
        public double yam { get; set; }

        [Required]
        public double yam_median { get; set; }

        [Required]
        public double roll { get; set; }

        [Required]
        public double roll_median { get; set; }
        
    }
}
