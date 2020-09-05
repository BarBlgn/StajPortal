using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StajPortal.Models
{
    public class Interview
    {
        [Key]
        public int InterviewId { get; set; }
        [Column(TypeName = "nvarchar(100)")]

        public string Questions { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Answers { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Explanation { get; set; }
    }
}
