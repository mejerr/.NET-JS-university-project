﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string? Text { get; set; }
        public int? ImageId { get; set; }
    }
}
