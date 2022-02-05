using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private ApiDbContext _dbContext;
        public CommentsController(ApiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetComments()
        {
            var comments = await (from comment in _dbContext.Comments
                                  select new
                                  {
                                      Id = comment.Id,
                                      Text = comment.Text,
                                  }).ToListAsync();
            return Ok(comments);
        }

        [HttpPost]
        public async Task<IActionResult> CreateComment([FromBody] Comment comment)
        {
            await _dbContext.Comments.AddAsync(comment);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
    }
}
