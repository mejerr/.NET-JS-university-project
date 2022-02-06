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
    public class ImagesController : ControllerBase
    {
        private ApiDbContext _dbContext;
        public ImagesController(ApiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> CreateImage([FromBody] Image image)
        {
            await _dbContext.Images.AddAsync(image);
            await _dbContext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpGet]
        public async Task<IActionResult> GetImages()
        {
            var images = await (from image in _dbContext.Images
                                  select new
                                  {
                                      Id = image.Id,
                                      ImageUrl = image.ImageUrl,
                                      ExportUrl = image.ExportUrl,
                                      Comments = image.Comments
                                  }).ToListAsync();
            return Ok(images);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ImageDetails(int imageId)
        {
            var imageDetails = await _dbContext.Images.FindAsync(imageId);
            if (imageDetails == null)
            {
                return NotFound("No Image found against this Id");
            }
            else
            {
                return Ok(imageDetails);
            }

        }
    }
}
