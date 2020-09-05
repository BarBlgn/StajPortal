using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StajPortal.Models
{
    public class Internship
    {
        [Key]
        public int InternshipId { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string CompanyName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Address { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Field { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Explanation { get; set; }
        public int Salary { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string HowApplied { get; set; }
    }
}
