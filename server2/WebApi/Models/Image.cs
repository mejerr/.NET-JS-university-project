﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string? ImageUrl { get; set; }
        public string? ExportUrl { get; set; }
        [NotMapped]
        public ICollection<Comment>? Comments { get; set; }
    }
}
