using System;
using System.ComponentModel.DataAnnotations;

namespace CognizantChallenge.Models
{
    public class Task
    {
        [Required]
        [MinLength(3)]
        public string PlayerName { get; set; }
        [Required]
        public string SolutionCode { get; set; }
    }
}
