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

        [HttpPost]
        public async Task<IActionResult> CreateComment([FromBody] Comment comment)
        {
            await _dbContext.Comments.AddAsync(comment);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpGet()]
        public async Task<IActionResult> CommentDetails(int imageId)
        {
            var comments = await (from comment in _dbContext.Comments
                                  where comment.ImageId == imageId
                                  select new
                                  {
                                      Id = comment.Id,
                                      Text = comment.Text,
                                      ImageId = comment.ImageId
                                  }).ToListAsync();
            return Ok(comments);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var comment = await _dbContext.Comments.FindAsync(id);
            if (comment == null)
            {
                return NotFound("No record found against this Id");
            }
            else
            {
                _dbContext.Comments.Remove(comment);
                await _dbContext.SaveChangesAsync();
                return Ok("Record Deleted!");
            }
        }
    }
}
